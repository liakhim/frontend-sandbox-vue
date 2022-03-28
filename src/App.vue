<template>
  <div id="app" style="background: #efefef; min-height: 100vh">
    <div class="layout layout-type-1">
      <div class="title">
        <h1 class="h1">TEST PAGE</h1>
      </div>
      <div class="content d-flex align-items-start">
        <div class="left" style="min-width: 360px">
          <div class="block block-type-1">
            <h2 class="h2">Block type 1</h2>
            <label class="switcher-type-1">
              <input type="checkbox">
            </label>
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-type-1 pagination-sm violet">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
          <div class="block block-type-1 margin-top-3">
            <h2 class="h2">Block type 1</h2>
            <label class="switcher-type-2">
              <input type="checkbox">
            </label>
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-type-1 pagination-sm violet">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="right padding-left-3" style="width: 100%">
          <div class="block block-type-2">
            <h2 class="h2">Tirle</h2>
            <div class="table-responsive table-type-2">
              <table class="table table-adaptive table-striped table-hover">
                <thead>
                <tr>
                  <th class="sticky-col first-col">
                    <label class="checkbox-type-1 td-content">
                      <input type="checkbox" checked>
                    </label>
                  </th>
                  <th class="col sticky-col last-col">Name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Country</th>
                  <th scope="col">Balance</th>
                  <th class="green-th" scope="col">Plan</th>
                  <th class="red-th" scope="col">Registration date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td data-not-before class="sticky-col first-col">
                    <div class="td-content">
                      <label class="checkbox-type-1">
                        <input type="checkbox" checked>
                      </label>
                    </div>
                  </td>
                  <td data-title="Name" class="sticky-col last-col">
                    <div class="td-content">
                      <div class="name-block d-flex flex-column">
                        <p>Name 1</p>
                        <p class="p-small text-gray text-nowrap margin-top-1">id: 1234567890</p>
                      </div>
                    </div>
                  </td>
                  <td data-title="Last name">
                    <div class="td-content">
                      <div class="d-flex align-items-center">
                        <div class="status-badge-type-1">
                          <div class="marker green"></div>
                          <p>Badge green</p>
                        </div>
                        <p class="padding-x-2 p-small">Last name 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto eligendi harum labore sequi sit soluta? Accusantium dicta doloremque libero mollitia epellendus sapiente veniam? Ad culpa dicta enim esse provident!</p>
                      </div>
                    </div>
                  </td>
                  <td data-title="Country">
                    <div class="td-content">
                      <span>Country</span>
                    </div>
                  </td>
                  <td data-title="Balance">
                    <div class="td-content">
                      <span>199</span>
                    </div>
                  </td>
                  <td data-title="Plan">
                    <div class="td-content">
                      <span>Personal</span>
                    </div>
                  </td>
                  <td data-title="Registration date">
                    <div class="td-content">
                      <div class="d-flex align-items-center justify-content-end">
                        <span class="text-nowrap">12-12-2021</span>
                        <button class="btn btn-custom margin-left-3">
                          <i class="fak fa-down-to-line-solid"></i>
                        </button>
                        <button class="btn btn-danger margin-left-1">
                          <i class="fak fa-xmark-regular"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-not-before class="sticky-col first-col">
                    <div class="td-content">
                      <label class="switcher-type-2">
                        <input checked="checked" type="checkbox">
                      </label>
                    </div>
                  </td>
                  <td data-title="Name" class="sticky-col last-col">
                    <div class="td-content">
                      <span>Name 1</span>
                    </div>
                  </td>
                  <td data-title="Last name">
                    <div class="td-content">
                      <span>Last name 1</span>
                    </div>
                  </td>
                  <td data-title="Country">
                    <div class="td-content">
                      <span>Country</span>
                    </div>
                  </td>
                  <td data-title="Balance">
                    <div class="td-content">
                      <span>199</span>
                    </div>
                  </td>
                  <td data-title="Plan">
                    <div class="td-content">
                      <span>Personal</span>
                    </div>
                  </td>
                  <td data-title="Registration date">
                    <div class="td-content">
                      <span>12-12-2021</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-not-before class="sticky-col first-col">
                    <div class="td-content">
                      <label class="switcher-type-2">
                        <input checked="checked" type="checkbox">
                      </label>
                    </div>
                  </td>
                  <td data-title="Name" class="sticky-col last-col">
                    <div class="td-content">
                      <span>Name 1</span>
                    </div>
                  </td>
                  <td data-title="Last name">
                    <div class="td-content">
                      <span>Last name 1</span>
                    </div>
                  </td>
                  <td data-title="Country">
                    <div class="td-content">
                      <span>Country</span>
                    </div>
                  </td>
                  <td data-title="Balance">
                    <div class="td-content">
                      <span>199</span>
                    </div>
                  </td>
                  <td data-title="Plan">
                    <div class="td-content">
                      <span>Personal</span>
                    </div>
                  </td>
                  <td data-title="Registration date">
                    <div class="td-content">
                      <span>12-12-2021</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-not-before class="sticky-col first-col">
                    <div class="td-content">
                      <label class="switcher-type-2">
                        <input checked="checked" type="checkbox">
                      </label>
                    </div>
                  </td>
                  <td data-title="Name" class="sticky-col last-col">
                    <div class="td-content">
                      <span>Name 1</span>
                    </div>
                  </td>
                  <td data-title="Last name">
                    <div class="td-content">
                      <span>Last name 1</span>
                    </div>
                  </td>
                  <td data-title="Country">
                    <div class="td-content">
                      <span>Country</span>
                    </div>
                  </td>
                  <td data-title="Balance">
                    <div class="td-content">
                      <span>199</span>
                    </div>
                  </td>
                  <td data-title="Plan">
                    <div class="td-content">
                      <span>Personal</span>
                    </div>
                  </td>
                  <td data-title="Registration date">
                    <div class="td-content">
                      <span>12-12-2021</span>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  // @import "~@icon/bootstrap-icons/bootstrap-icons.css";
  @import "~bootstrap-redefinition/app.min.css";
  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
