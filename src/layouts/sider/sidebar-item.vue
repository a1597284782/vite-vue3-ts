<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <linkVue v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <el-icon>
            <component :is="onlyOneChild.meta && onlyOneChild.meta.icon" />
          </el-icon>
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </linkVue>
    </template>

    <el-sub-menu v-else :index="resolvePath(item.path)">
      <el-icon>
        <component :is="item.meta && item.meta.icon" />
      </el-icon>
      <template #title>
        <span>{{ item.meta ? item.meta.title : '' }}</span>
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import path from 'path-browserify'
import type { AppRouteRecordRaw } from '@/router/types'
import { isExternal } from '@/utils/validate'
import linkVue from './link.vue'

export default defineComponent({
  components: {
    linkVue
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const resolvePath = (routePath: string) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }

    interface Iroute extends AppRouteRecordRaw {
      noShowingChildren?: boolean
    }
    const onlyOneChild = ref<Iroute>(null as any)

    const hasOneShowingChild = (
      children: AppRouteRecordRaw[] = [],
      parent: any
    ) => {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          // 只有一个显示子节点时使用
          onlyOneChild.value = item
          return true
        }
      })

      // 当只有一个子路由器时，缺省显示该子路由器
      if (showingChildren.length === 1) {
        return true
      }

      // 如果没有子路由器显示，则显示父路由器
      if (showingChildren.length === 0) {
        onlyOneChild.value = {
          ...parent,
          noShowingChildren: true
        } as Iroute
        return true
      }

      return false
    }

    return {
      resolvePath,
      hasOneShowingChild,
      onlyOneChild
    }
  }
})
</script>

<style scoped></style>
