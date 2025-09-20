<template>
  <n-flex justify="center" class="py-16">
    <n-card :bordered="false" class="max-w-2xl" :style="{ backgroundColor: 'transparent', boxShadow: 'none' }">
      <n-h2 class="underline underline-offset-8">Tools</n-h2>
      <n-grid :y-gap="48" :cols="1">
        <!-- Languages -->
        <n-gi>
          <n-grid :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-python-plain-wordmark"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-typescript-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-javascript-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-php-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>

        <!-- Frameworks and Libraries -->
        <n-gi>
          <n-grid :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-django-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-djangorest-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-vuejs-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-htmx-plain-wordmark"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>

        <!-- Databases -->
        <n-gi>
          <n-grid :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-postgresql-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-mysql-original"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-redis-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>

        <!-- Cloud Providers -->
        <n-gi>
          <n-grid :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-googlecloud-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-amazonwebservices-plain-wordmark"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-azure-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>

        <!-- Infra -->
        <n-gi>
          <n-grid :y-gap="24" :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-docker-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-ubuntu-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-linux-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-terraform-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-githubactions-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-nginx-original"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>

        <!-- Package Managers -->
        <n-gi>
          <n-grid :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-pnpm-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-poetry-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>

        <!-- Others -->
        <n-gi>
          <n-grid :cols="4">
            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-wordpress-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-insomnia-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-vim-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>

            <n-gi>
              <n-flex justify="center">
                <n-icon size="50">
                  <i class="devicon-bash-plain"></i>
                </n-icon>
              </n-flex>
            </n-gi>
          </n-grid>
        </n-gi>
      </n-grid>
    </n-card>
  </n-flex>
</template>
