<template>
    <div class="page-home">
        <!-- <app-header /> -->
        <div class="page-home-container">
            <div class="page-home-container-content">
                <div class="page-home-container-content-title">platform</div>
                <!-- <div class="page-home-container-content-slogon">同样的场景，我们只写一次</div> -->
                <div class="page-home-container-content-actions">
                    <Button type="primary" size="large" shape="circle">
                        <router-link :style="{color: '#f8f8f8'}" to="/doc">快速开始</router-link>
                    </Button>
                    <!-- <Button type="primary">模板</Button> -->
                </div>
            </div>
            <!-- <div class="page-home-carousel-content">For the same scenario, we only write it once.</div> -->
        </div>
    </div>
</template>
<script>
import appHeader from '../../components/main/components/header/appHeader';
export default {
    components: {
        appHeader
    }
};
</script>
<style lang="less">
.page-home {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    // background: url('./assets/cool-background.svg') no-repeat;
    background: #fff;
    background-size: cover;
    font-family: Avenir,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;

    .ivu-layout-header {
        background: none;
    }
    .ivu-menu-dark {
        background: none;
    }

    .layout-nav {
        a {
            color: #f8f8f8;
        }
        .ivu-menu-item {
            color: #f7dada;
        }
        .ivu-menu-submenu-title {
            color: #f8f8f8;
        }
        .ivu-select-dropdown {
            background-color: blue
        }

        .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item:hover {
            background-color: blue;
            a {
                color: #fff;
            }
        }

    }


    &-container {
        position: relative;
        height: 100%;
        &-content {
            position: absolute;
            top: 10%;
            left: 10%;

            &-title {
                color: #314659;
                margin: 8px 0 58px;
                font-weight: 500;
                font-size: 68px;
            }

            &-desc {
                margin: 8px 0 58px;
                color: #314659;
                font-weight: 500;
                font-size: 20px;
                line-height: 40px;
            }

            &-actions {
                margin-top: 20px;

                .ivu-btn {
                    margin-right: 20px;
                    width: 100px;
                }
            }
        }
    }
}
</style>
