<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Products
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="pageMenu">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <div class="form-control-wrap">
                          <div class="form-icon form-icon-right">
                            <em class="icon ni ni-search" />
                          </div>
                          <input id="default-04" type="text" class="form-control" placeholder="Quick search by id">
                        </div>
                      </li>
                      <li>
                        <div class="drodown">
                          <a href="#" class="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white" data-toggle="dropdown">Status</a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <ul class="link-list-opt no-bdr">
                              <li><a href="#"><span>New Items</span></a></li>
                              <li><a href="#"><span>Featured</span></a></li>
                              <li><a href="#"><span>Out of Stock</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="#" data-target="addProduct" class="toggle btn btn-icon btn-primary d-md-none"><em class="icon ni ni-plus" /></a>
                        <a href="#" data-target="addProduct" class="toggle btn btn-primary d-none d-md-inline-flex"><em class="icon ni ni-plus" /><span>Add Product</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div><!-- .nk-block-head-content -->
            </div><!-- .nk-block-between -->
          </div><!-- .nk-block-head -->
          <div class="nk-block">
            <div class="nk-tb-list is-separate mb-3">
              <div class="nk-tb-item nk-tb-head">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span>Name</span>
                </div>
                <div class="nk-tb-col">
                  <span>SKU</span>
                </div>
                <div class="nk-tb-col">
                  <span>Price</span>
                </div>
                <div class="nk-tb-col">
                  <span>Stock</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>Category</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <em class="tb-asterisk icon ni ni-star-round" />
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Selected</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Selected</span></a></li>
                            <li><a href="#"><em class="icon ni ni-bar-c" /><span>Update Stock</span></a></li>
                            <li><a href="#"><em class="icon ni ni-invest" /><span>Update Price</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/a.png" alt="" class="thumb">
                    <span class="title">Pink Fitness Tracker</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3749</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 99.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">49</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Fitbit, Tracker</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/b.png" alt="" class="thumb">
                    <span class="title">Purple Smartwatch</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3750</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 89.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">103</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Gadgets, Fitbit, Tracker</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/c.png" alt="" class="thumb">
                    <span class="title">Black Mi Band Smartwatch</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3751</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 299.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">68</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Smartwatch, Tracker</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#" class="active"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/d.png" alt="" class="thumb">
                    <span class="title">Black Headphones</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3752</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 99.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">77</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Headphone, Gadgets</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/e.png" alt="" class="thumb">
                    <span class="title">iPhone 7 Headphones</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3753</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 129.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">81</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Headphone, Gadgets</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/f.png" alt="" class="thumb">
                    <span class="title">Purple Blue Gradient iPhone Case</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3754</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 29.00</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">28</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Case, Gadgets</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/g.png" alt="" class="thumb">
                    <span class="title">Plug In Speaker</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3755</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 19.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">62</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Gadgets, Speaker</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/h.png" alt="" class="thumb">
                    <span class="title">Wireless Waterproof Speaker</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3756</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 59.00</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">37</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Speaker, Gadgets</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/j.png" alt="" class="thumb">
                    <span class="title">AliExpress Fitness Trackers</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3758</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 35.99</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">145</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Fitbit, Tracker</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
              <div class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-sm">
                  <span class="tb-product">
                    <img src="@/assets/admin/images/product/i.png" alt="" class="thumb">
                    <span class="title">Pool Party Drink Holder</span>
                  </span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">UY3757</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-lead">$ 9.49</span>
                </div>
                <div class="nk-tb-col">
                  <span class="tb-sub">73</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-sub">Men, Holder</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <div class="asterisk tb-asterisk">
                    <a href="#"><em class="asterisk-off icon ni ni-star" /><em class="asterisk-on icon ni ni-star-fill" /></a>
                  </div>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li class="mr-n1">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-edit" /><span>Edit Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-eye" /><span>View Product</span></a></li>
                            <li><a href="#"><em class="icon ni ni-activity-round" /><span>Product Orders</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Product</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
            </div><!-- .nk-tb-list -->
            <div class="card">
              <div class="card-inner">
                <div class="nk-block-between-md g-3">
                  <div class="g">
                    <ul class="pagination justify-content-center justify-content-md-start">
                      <li class="page-item">
                        <a class="page-link" href="#"><em class="icon ni ni-chevrons-left" /></a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <span class="page-link"><em class="icon ni ni-more-h" /></span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">6</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">7</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#"><em class="icon ni ni-chevrons-right" /></a>
                      </li>
                    </ul><!-- .pagination -->
                  </div>
                  <div class="g">
                    <div class="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                      <div>Page</div>
                      <div>
                        <select
                          class="form-select form-select-sm select2-hidden-accessible"
                          data-search="on"
                          data-dropdown="xs center"
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="page-1" data-select2-id="3">
                            1
                          </option>
                          <option value="page-2">
                            2
                          </option>
                          <option value="page-4">
                            4
                          </option>
                          <option value="page-5">
                            5
                          </option>
                          <option value="page-6">
                            6
                          </option>
                          <option value="page-7">
                            7
                          </option>
                          <option value="page-8">
                            8
                          </option>
                          <option value="page-9">
                            9
                          </option>
                          <option value="page-10">
                            10
                          </option>
                          <option value="page-11">
                            11
                          </option>
                          <option value="page-12">
                            12
                          </option>
                          <option value="page-13">
                            13
                          </option>
                          <option value="page-14">
                            14
                          </option>
                          <option value="page-15">
                            15
                          </option>
                          <option value="page-16">
                            16
                          </option>
                          <option value="page-17">
                            17
                          </option>
                          <option value="page-18">
                            18
                          </option>
                          <option value="page-19">
                            19
                          </option>
                          <option value="page-20">
                            20
                          </option>
                        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 41px;"><span class="selection"><span
                          class="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-5qon-container"
                        ><span id="select2-5qon-container" class="select2-selection__rendered" role="textbox" aria-readonly="true" title="1">1</span><span class="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span class="dropdown-wrapper" aria-hidden="true" /></span>
                      </div>
                      <div>OF 102</div>
                    </div>
                  </div><!-- .pagination-goto -->
                </div><!-- .nk-block-between -->
              </div>
            </div>
          </div><!-- .nk-block -->
          <div
            class="nk-add-product toggle-slide toggle-slide-right toggle-screen-any"
            data-content="addProduct"
            data-toggle-screen="any"
            data-toggle-overlay="true"
            data-toggle-body="true"
            data-simplebar="init"
          >
            <div class="simplebar-wrapper" style="margin: -24px;">
              <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer" />
              </div><div class="simplebar-mask">
                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                  <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden scroll;">
                    <div class="simplebar-content" style="padding: 24px;">
                      <div class="nk-block-head">
                        <div class="nk-block-head-content">
                          <h5 class="nk-block-title">
                            New Product
                          </h5>
                          <div class="nk-block-des">
                            <p>Add information and add new product.</p>
                          </div>
                        </div>
                      </div><!-- .nk-block-head -->
                      <div class="nk-block">
                        <div class="row g-3">
                          <div class="col-12">
                            <div class="form-group">
                              <label class="form-label" for="product-title">Product Title</label>
                              <div class="form-control-wrap">
                                <input id="product-title" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-mb-6">
                            <div class="form-group">
                              <label class="form-label" for="regular-price">Regular Price</label>
                              <div class="form-control-wrap">
                                <input id="regular-price" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-mb-6">
                            <div class="form-group">
                              <label class="form-label" for="sale-price">Sale Price</label>
                              <div class="form-control-wrap">
                                <input id="sale-price" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-mb-6">
                            <div class="form-group">
                              <label class="form-label" for="stock">Stock</label>
                              <div class="form-control-wrap">
                                <input id="stock" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-mb-6">
                            <div class="form-group">
                              <label class="form-label" for="SKU">SKU</label>
                              <div class="form-control-wrap">
                                <input id="SKU" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label class="form-label" for="category">Category</label>
                              <div class="form-control-wrap">
                                <input id="category" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label class="form-label" for="tags">Tags</label>
                              <div class="form-control-wrap">
                                <input id="tags" type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="upload-zone small bg-lighter my-2 dropzone dz-clickable">
                              <div class="dz-message">
                                <span class="dz-message-text">Drag and drop file</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <button class="btn btn-primary">
                              <em class="icon ni ni-plus" /><span>Add New</span>
                            </button>
                          </div>
                        </div>
                      </div><!-- .nk-block -->
                    </div>
                  </div>
                </div>
              </div><div class="simplebar-placeholder" style="width: auto; height: 699px;" />
            </div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
              <div class="simplebar-scrollbar" style="width: 0px; display: none;" />
            </div><div class="simplebar-track simplebar-vertical" style="visibility: visible;">
              <div class="simplebar-scrollbar" style="height: 38px; transform: translate3d(0px, 0px, 0px); display: block;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
