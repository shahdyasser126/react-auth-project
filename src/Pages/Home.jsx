 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import services from '../images/Services.png';
import services1 from '../images/Services (1).png';
import services2 from '../images/Services (2).png';
import dev1IMG from '../images/Dev1.png';
import phone from '../images/Frame 560.png';
import dev2IMG from '../images/Dev2.png';
import dev3IMG from '../images/Dev3.png';
import dev4IMG from '../images/Dev4.png';
import dev5IMG from '../images/Dev5.png';
import dev6IMG from '../images/Dev6.png';
import dev7IMG from '../images/Dev7.png';
import dev8IMG from '../images/Dev8.png';
import dev9IMG from '../images/Dev9.png';
import { Link } from 'react-router-dom';

 
const flashSaleProducts = [
    { id: 1, img: dev1IMG, name: 'HAVIT HV-G92 Gamepad',      price: 120, oldPrice: 160, discount: 40, rating: 88 },
    { id: 2, img: dev2IMG, name: 'AK-900 Wired Keyboard',     price: 160, oldPrice: 160, discount: 40, rating: 75 },
    { id: 3, img: dev3IMG, name: 'IPS LCD Gaming Monitor',    price: 570, oldPrice: 400, discount: 30, rating: 90 },
    { id: 4, img: dev4IMG, name: 'S-Series Comfort Chair',    price: 375, oldPrice: 400, discount: 25, rating: 94 },
    { id: 5, img: dev1IMG, name: 'S-Series Coffee Table',     price: 375, oldPrice: 400, discount: 35, rating: 94 },
    { id: 6, img: dev2IMG, name: 'AK-900 Wired Keyboard',     price: 160, oldPrice: 160, discount: 40, rating: 75 },
];

const bestSellingProducts = [
    { id: 1, img: dev1IMG, name: 'HAVIT HV-G92 Gamepad',   price: 120, oldPrice: 160, rating: 88 },
    { id: 2, img: dev2IMG, name: 'AK-900 Wired Keyboard',  price: 160, oldPrice: 160, rating: 75 },
    { id: 3, img: dev3IMG, name: 'IPS LCD Gaming Monitor', price: 570, oldPrice: 400, rating: 90 },
    { id: 4, img: dev4IMG, name: 'S-Series Comfort Chair', price: 375, oldPrice: 400, rating: 94 },
];

const ourProducts = [
    { id: 1,  img: dev1IMG, name: 'HAVIT HV-G92 Gamepad',   price: 120, rating: 88 },
    { id: 2,  img: dev2IMG, name: 'AK-900 Wired Keyboard',  price: 160, rating: 75 },
    { id: 3,  img: dev3IMG, name: 'IPS LCD Gaming Monitor', price: 570, rating: 90 },
    { id: 4,  img: dev4IMG, name: 'S-Series Comfort Chair', price: 375, rating: 94 },
    { id: 5,  img: dev4IMG, name: 'S-Series Comfort Chair', price: 375, rating: 94 },
    { id: 6,  img: dev3IMG, name: 'IPS LCD Gaming Monitor', price: 570, rating: 90 },
    { id: 7,  img: dev2IMG, name: 'AK-900 Wired Keyboard',  price: 160, rating: 75 },
    { id: 8,  img: dev1IMG, name: 'HAVIT HV-G92 Gamepad',   price: 120, rating: 88 },
];
 
const ProductCard = ({ img, name, price, oldPrice, discount, rating, showOldPrice = true }) => (
    <Link to="/singleproduct" className="text-decoration-none">
        <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="d-flex position-relative bg-light rounded-top">
                {discount && (
                    <div
                        className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2"
                        style={{ fontSize: '12px', zIndex: 1 }}
                    >
                        -{discount}%
                    </div>
                )}
                <div
                    className="bg-light d-flex align-items-center justify-content-center overflow-hidden flex-grow-1"
                    style={{ height: '200px', borderRadius: '16px 16px 0 0' }}
                >
                    <img
                        src={img}
                        alt={name}
                        style={{ width: '68%', height: '100%', paddingTop: '15%', paddingBottom: '15%', objectFit: 'contain' }}
                    />
                </div>
                <div className="d-flex flex-column gap-2 mt-2">
                    <button className="border-0 bg-transparent" style={{ marginLeft: '-35px' }}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="border-0 bg-transparent" style={{ marginLeft: '-35px' }}>
                        <i className="fa-regular fa-eye"></i>
                    </button>
                </div>
            </div>
            <div className="card-body p-3">
                <h6 className="fw-bold mb-2 text-start text-dark">{name}</h6>
                <div className="d-flex gap-2 mb-2">
                    <span className="fw-bold text-danger">${price}</span>
                    {showOldPrice && oldPrice && (
                        <span className="text-muted text-decoration-line-through">${oldPrice}</span>
                    )}
                </div>
                <div className="text-warning small text-start">
                    {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    <i className="fa-regular fa-star"></i>
                    <span className="text-secondary ms-1">({rating})</span>
                </div>
            </div>
        </div>
    </Link>
);

 
const swiperConfig = (prevClass, nextClass) => ({
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` },
    breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});
 
export const Home = () => {
    return (
        <>
            {/* ── Hero ── */}
            <div className="d-flex align-items-center w-75 mx-auto position-relative">
                <div
                    className="d-flex flex-column gap-3 border-0 border-end text-center position-absolute top-0 mt-2"
                    style={{ width: '18%' }}
                >
                    {["Woman's Fashion", "Men's Fashion", "Home & Lifestyle", "Medicine",
                        "Sports & Outdoor", "Electronics", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
                    ].map(cat => (
                        <Link key={cat} to="not" className="border-0 bg-transparent text-decoration-none text-black text-start">
                            {cat}
                        </Link>
                    ))}
                </div>
                <div className="bg-dark w-75 ms-auto m-5">
                    <img src={phone} alt="" />
                </div>
            </div>

            <br /><br /><br />
 
            <div style={{ width: '70%', marginLeft: '15%' }}>
                <div className="d-flex align-items-center gap-3">
                    <h2 className="bg-danger rounded"><span style={{ opacity: 0 }}>$</span></h2>
                    <h2 className="fw-bold text-danger">Today's</h2>
                </div>

                <div className="mt-3 d-flex gap-3 align-items-end mb-4">
                    <h1 className="fw-bold mb-0">Flash Sales</h1>
                    <div className="text-center" style={{ marginLeft: '10%' }}>
                        <h5 className="mb-0">Days</h5><h5 className="mb-0 fw-bold">03</h5>
                    </div>
                    <h5 className="mb-0 fw-bold text-danger mb-2">:</h5>
                    <div className="text-center">
                        <h5 className="mb-0">Hours</h5><h5 className="mb-0 fw-bold">23</h5>
                    </div>
                    <h5 className="mb-0 fw-bold text-danger mb-2">:</h5>
                    <div className="text-center">
                        <h5 className="mb-0">Minutes</h5><h5 className="mb-0 fw-bold">19</h5>
                    </div>
                    <h5 className="mb-0 fw-bold text-danger mb-2">:</h5>
                    <div className="text-center">
                        <h5 className="mb-0">Seconds</h5><h5 className="mb-0 fw-bold">56</h5>
                    </div>

                    {/* أزرار التنقل المخصصة */}
                    <div className="d-flex gap-2" style={{ marginLeft: 'auto' }}>
                        <button className="rounded-circle border-0 bg-light flash-prev">
                            <i className="fa-solid fa-arrow-left fa-2x"></i>
                        </button>
                        <button className="rounded-circle border-0 bg-light flash-next">
                            <i className="fa-solid fa-arrow-right fa-2x"></i>
                        </button>
                    </div>
                </div>

                <Swiper {...swiperConfig('flash-prev', 'flash-next')}>
                    {flashSaleProducts.map(p => (
                        <SwiperSlide key={p.id}>
                            <ProductCard {...p} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <br /><br /><br />

            <div className="d-flex justify-content-center">
                <Link to="/allproducts" className="border-0 bg-danger p-3 rounded text-light text-decoration-none">
                    View All Products
                </Link>
            </div>

            <br /><br />
            <hr className="w-75 mx-auto" />
            <br /><br /><br />

        
            <div style={{ width: '70%', marginLeft: '15%' }}>
                <div className="d-flex align-items-center gap-3">
                    <h2 className="bg-danger rounded"><span style={{ opacity: 0 }}>$</span></h2>
                    <h2 className="fw-bold text-danger">Categories</h2>
                </div>
                <div className="mt-3 d-flex gap-3 align-items-end">
                    <h1 className="fw-bold mb-0">Browse By Category</h1>
                    <div className="d-flex gap-2" style={{ marginLeft: 'auto' }}>
                        <button className="rounded-circle border-0 cat-prev">
                            <i className="fa-solid fa-arrow-left fa-2x"></i>
                        </button>
                        <button className="rounded-circle border-0 cat-next">
                            <i className="fa-solid fa-arrow-right fa-2x"></i>
                        </button>
                    </div>
                </div>

                <br /><br />

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={2}
                    navigation={{ prevEl: '.cat-prev', nextEl: '.cat-next' }}
                    breakpoints={{ 576: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
                >
                    {[
                        { icon: 'fa-mobile-alt', label: 'Phones' },
                        { icon: 'fa-desktop',    label: 'Computers' },
                        { icon: 'fa-bell',       label: 'Alarms' },
                        { icon: 'fa-camera',     label: 'Cameras' },
                        { icon: 'fa-headphones', label: 'Headphones' },
                        { icon: 'fa-gamepad',    label: 'Gaming' },
                    ].map(({ icon, label }) => (
                        <SwiperSlide key={label}>
                            <button className="border rounded-3 p-4 bg-transparent text-center w-100">
                                <i className={`fa-solid ${icon} fa-2x`}></i>
                                <br /><br />
                                <span>{label}</span>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <br /><br /><br />
            <hr className="w-75 mx-auto" />
            <br /><br /><br />

       
            <div style={{ width: '70%', marginLeft: '15%' }}>
                <div className="d-flex align-items-center gap-3">
                    <h2 className="bg-danger rounded"><span style={{ opacity: 0 }}>$</span></h2>
                    <h2 className="fw-bold text-danger">This Month</h2>
                </div>
                <div className="mt-3 d-flex gap-3 align-items-end mb-4">
                    <h2 className="fw-bold mb-0" style={{ whiteSpace: 'nowrap' }}>Best Selling Products</h2>
                    <Link
                        to="/allproducts"
                        className="bg-danger rounded px-5 py-3 text-decoration-none border-0 text-white"
                        style={{ marginLeft: 'auto' }}
                    >
                        View All
                    </Link>
                </div>

                <Swiper {...swiperConfig('best-prev', 'best-next')}>
                    {bestSellingProducts.map(p => (
                        <SwiperSlide key={p.id}>
                            <ProductCard {...p} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <br /><br /><br /><br /><br /><br />

            <img src={dev5IMG} alt="promo" style={{ width: '68%', marginLeft: '15%' }} />

            <br /><br /><br /><br />

 
            <div style={{ width: '70%', marginLeft: '15%' }}>
                <div className="d-flex align-items-center gap-3">
                    <h2 className="bg-danger rounded"><span style={{ opacity: 0 }}>$</span></h2>
                    <h2 className="fw-bold text-danger">Our Products</h2>
                </div>
                <div className="mt-3 d-flex gap-3 align-items-end mb-4">
                    <h1 className="fw-bold mb-0">Explore Our Products</h1>
                    <div className="d-flex gap-2" style={{ marginLeft: 'auto' }}>
                        <button className="rounded-circle border-0 our-prev">
                            <i className="fa-solid fa-arrow-left fa-2x"></i>
                        </button>
                        <button className="rounded-circle border-0 our-next">
                            <i className="fa-solid fa-arrow-right fa-2x"></i>
                        </button>
                    </div>
                </div>

                <Swiper
                    {...swiperConfig('our-prev', 'our-next')}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    style={{ paddingBottom: '40px' }}
                >
                    {ourProducts.map(p => (
                        <SwiperSlide key={p.id}>
                            <ProductCard {...p} showOldPrice={false} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <br /><br /><br />

            <div className="d-flex justify-content-center">
                <Link to="/allproducts" className="bg-danger rounded px-5 py-3 text-decoration-none border-0 text-white">
                    View All Products
                </Link>
            </div>

            <br /><br />
            <hr className="w-75 mx-auto" />
            <br /><br /><br />

 
            <div className="container mt-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
                    <h5 className="text-danger fw-bold mb-0">Featured</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold mb-0">New Arrival</h2>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="text-white rounded-4 p-5" style={{ height: '400px', backgroundImage: `url(${dev6IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h2 className="fw-bold">PlayStation 5</h2>
                            <p>Black and White version of the PS5 coming out on sale.</p>
                            <Link to="not" className="btn border-0 border-bottom text-light rounded-0">Shop Now →</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-white rounded-4 p-4" style={{ height: '190px', backgroundImage: `url(${dev7IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <h4 className="fw-bold">Women's Collections</h4>
                                    <p>Featured woman collections that give you another vibe.</p>
                                    <Link to="not" className="btn border-0 border-bottom text-light rounded-0">Shop Now →</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-white rounded-4 p-4" style={{ height: '190px', backgroundImage: `url(${dev8IMG})`, backgroundSize: 'cover' }}>
                                    <h5 className="fw-bold">Speakers</h5>
                                    <p>Amazon wireless speakers</p>
                                    <Link to="not" className="btn border-0 border-bottom text-light rounded-0">Shop Now →</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-white rounded-4 p-4" style={{ height: '190px', backgroundImage: `url(${dev9IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <h5 className="fw-bold">Perfume</h5>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <Link to="not" className="btn border-0 border-bottom text-light rounded-0">Shop Now →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />

     
            <div className="container mt-5 mb-5">
                <div className="row g-4 text-center">
                    {[
                        { img: services,  title: 'FREE AND FAST DELIVERY',  desc: 'Free delivery for all orders over $140' },
                        { img: services1, title: '24/7 CUSTOMER SERVICE',   desc: 'Friendly 24/7 customer support' },
                        { img: services2, title: 'MONEY BACK GUARANTEE',    desc: 'We return money within 30 days' },
                    ].map(({ img, title, desc }) => (
                        <div key={title} className="col-md-4">
                            <div className="p-4">
                                <img src={img} alt="" width={70} />
                                <h5 className="fw-bold m-3">{title}</h5>
                                <p className="text-muted">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
