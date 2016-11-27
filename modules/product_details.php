<section class="page details" id="details">
    <div class="inner">
        <div class="container">
            <div class="row bread">
                <div class="col-md-6">
                    <h2 class="page-title"><strong>Mid</strong> Centure</h2>
                </div>
                <div class="col-md-6">
                    <ol class="breadcrumb pull-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Living Room</a></li>
                        <li class="breadcrumb-item">Mid Centure</li>
                    </ol>
                </div>
            </div>
            <div class="row details">
                <div class="col-md-4 carousel-product-details">
                    <div class="carousel-wrap">
                        <div class="bg-gay"></div>
                    </div>
                    <div class="slider-for">
                        <img src="images/carousel-img.png" alt="" class="center-block">
                        <img src="images/carousel-img.png" alt="" class="center-block">
                        <img src="images/carousel-img.png" alt="" class="center-block">
                    </div>
                    <div class="slider-nav">
                        <div class="slider-nav-box">
                            <img src="images/slider-nav-1.png" class="center-block" alt="">
                            <div class="bg-gay"></div>
                        </div>
                        <div class="slider-nav-box">
                            <img src="images/slider-nav-2.png" class="center-block" alt="">
                            <div class="bg-gay"></div>
                        </div>
                        <div class="slider-nav-box">
                            <img src="images/slider-nav-3.png" class="center-block" alt="">
                            <div class="bg-gay"></div>
                        </div>
                        <div class="slider-nav-box">
                            <img src="images/slider-nav-3.png" class="center-block" alt="">
                            <div class="bg-gay"></div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function(){
                            $('.slider-for').slick({
                                slidesToShow: 3,
                                fade: true,
                                asNavFor: '.slider-nav',
                            });
                            $('.slider-nav').slick({
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                asNavFor: '.slider-for',
                                dots: true
                            });
                        });
                    </script>
                </div>
                <div class="col-md-5">
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis dolor repellendus quis nostrum.
                    </p>
                    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
                    <h5 class="text-uppercase status">available</h5>
                    <ul class="list-unstyled list-inline">
                        <li><a href=""><img src="images/icon-fb.png" alt=""></a></li>
                        <li><a href=""><img src="images/icon-twitter.png" alt=""></a></li>
                        <li><a href=""><img src="images/icon-pintester.png" alt=""></a></li>
                        <li><a href=""><img src="images/icon-google.png" alt=""></a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <div class="price">
                        <span class="price-detail price-retail">$ 140.00</span>
                        <span class="price-detail price-sale">$ 130.00</span>
                    </div>
                    <div class="row">
                        <div class="form-group clearfix">
                            <div class="col-md-3">
                                <label for="pwd" class="label-height">Quantity</label>
                            </div>
                            <div class="col-md-9">
                                <input type="number" value="1" class="form-control" id="pwd">
                            </div>
                        </div>
                        <div class="form-group clearfix">
                            <div class="col-md-3">
                                <label for="pwd" class="label-height">Color</label>
                            </div>
                            <div class="col-md-9">
                                <select name="" id="" class="form-control">
                                    <option value="">Gray</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group clearfix">
                            <div class="col-md-3">
                                <label for="pwd" class="label-height">Size</label>
                            </div>
                            <div class="col-md-9">
                                <select name="" id="" class="form-control">
                                    <option value="" selected hidden disabled>M</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group clearfix">
                            <div class="col-md-12">
                                <p class="pull-right">
                                    SUB-TOTAL: <strong>$ 0.00</strong>
                                </p>
                            </div>
                        </div>
                        <div class="form-group clearfix">
                            <div class="col-md-12">
                                <a href="" class="btn btn-contact text-uppercase full">add to cart</a>
                            </div>
                        </div>
                        <div class="form-group clearfix">
                            <div class="col-md-12">
                                <a href="" class="btn btn-contact text-uppercase full">add to wishlist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>