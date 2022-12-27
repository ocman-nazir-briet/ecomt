const signup_card_toggle_p = document.querySelectorAll('.signup_card_toggle_p');
const free_account_section = document.querySelector('.free-account-section');
const business_account_section = document.querySelector('.business-account-section');
let choose_section = document.querySelector('.choose_section');

signup_card_toggle_p.forEach(parent => {
    const signup_card_btn = parent.querySelectorAll('.signup-card-btn');
    const submit = parent.querySelector('.signup-card-submit');
    signup_card_btn.forEach(ele => {
        ele.addEventListener('click', () => {
            signup_card_btn.forEach(all => all.classList.remove('signup-card-active'))
            ele.classList.add('signup-card-active');
            submit.classList.add('bg-[#FD9900]', 'cursor-pointer');
            submit.disabled = false;
            submit.onclick = function () {
                if (ele.getAttribute('data-link') == 'free') {
                    free_account_section.classList.remove('hidden');
                    choose_section.classList.add('hidden');
                } else {
                    business_account_section.classList.remove('hidden');
                    choose_section.classList.add('hidden');
                }
            }
        })
    })
});

let business_account_next_step = document.querySelector('.business-account-next-step');
let business_account_section_2 = document.querySelector('.business-account-section_2')
if (business_account_next_step) {
    business_account_next_step.addEventListener('click', () => {
        business_account_section_2.classList.remove('hidden');
        business_account_section.classList.add('hidden')
    })
}

let header = document.querySelector('.header-dynamic-height');
const delete_header_height = document.querySelectorAll('.delete-header-height');
if (window.innerWidth > 540) {
    delete_header_height.forEach(ele => {
        let height = header.clientHeight;
        let total = ele.getAttribute('data-height');
        ele.style.cssText = `min-height:calc(${parseInt(total)}vh - ${parseInt(height)}px)`
    })
}

let password_show_p = document.querySelectorAll('.password-show-p');
password_show_p.forEach(parent => {
    let inp = parent.querySelector('.password-show');
    let icon = parent.querySelector('.password-show-icon');

    icon.addEventListener('click', () => {
        if (inp.type == 'password') {
            inp.type = 'text'
        } else {
            inp.type = 'password'
        }
    })
});

let nav_openers = document.querySelectorAll('.nav_opener');
let navbar_mobile = document.querySelector('.navbar_mobile')
nav_openers.forEach(nav_opener => {
    nav_opener.addEventListener('click', () => {
        navbar_mobile.classList.toggle('hidden')
    })
})

var swiper = new Swiper(".card-slider-1", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: ".slider-1-paggination",
    },
    navigation: {
        nextEl: ".slider-1-next",
        prevEl: ".slider-1-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});

var swiper = new Swiper(".card-slider-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".slider-2-paggination",
    },
    navigation: {
        nextEl: ".slider-2-next",
        prevEl: ".slider-2-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});


var swiper = new Swiper(".category_slider", {
    slidesPerView: 9,
    spaceBetween: 10,
    navigation: {
        nextEl: ".category-2-next",
        prevEl: ".category-2-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        540: {
            slidesPerView: 4,
        },
        640: {
            slidesPerView: 6,
        },
        1280: {
            slidesPerView: 9,
        }
    },
    loop: true,
});

var swiper = new Swiper('.banner-slider', {
    spaceBetween: 10,
    navigation: {
        nextEl: ".banner-slider-next",
        prevEl: ".banner-slider-prev",
    },
    breakpoints: {
        0: {
            pagination: {
                el: ".banner-slider-paggination",
            },
        },
        640: {
            pagination: false
        },
    },
    effect: 'fade',
    speed: 1400,
    loop: true
})

let counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    let minus = counter.querySelector('.counter_minus');
    let plus = counter.querySelector('.counter_plus');
    let value = counter.querySelector('.counter_value');

    let num = parseInt(value.innerHTML);
    minus.addEventListener('click', () => {
        if (num >= 0) {
            value.innerHTML = num--
        }
    })

    plus.addEventListener('click', () => {
        if (num >= 0) {
            value.innerHTML = num++
        }
    })
})

let radio_select_p = document.querySelectorAll('.radio-select-parent');
radio_select_p.forEach(p => {
    p.addEventListener('click', () => {
        let radio_select_options = p.querySelector('.radio-select-options');
        let inp = p.querySelector('input');

        if (radio_select_options.classList.contains('radio_selected')) {
            radio_select_options.classList.remove('radio_selected');
            inp.checked = false;
        } else {
            radio_select_options.classList.add('radio_selected');
            inp.checked = true;
        }
    })
})

let filters_show = document.querySelector('.filters_show');
if (filters_show) {
    let filters_bar = document.querySelector('.filters_bar');
    let close_btn_filter = document.querySelector('.close_btn_filter')
    filters_show.addEventListener('click', () => {
        filters_bar.style.cssText = '';
        filters_bar.classList.add('filters_bar_active');
    })
    close_btn_filter.addEventListener('click', () => {
        filters_bar.classList.remove('filters_bar_active');
    })
}


const sticky_sidebar = document.querySelectorAll('.top-sticky-dynamic');
let nav = document.querySelector('header');

if (sticky_sidebar.length > 0) {
    sticky_sidebar.forEach(sidebar => {
        sidebar.style.cssText = `height:calc(100vh - ${nav.clientHeight + 40}px)`;
    })
}


let create_category = document.querySelector('.create_category');

if (create_category) {
    create_category.addEventListener('click', () => {
        let category_name = document.querySelector('.category_name');
        let category_status = document.querySelector('.category_status');
        let category_close = document.querySelector('.category_close');
        let category_spawner = document.querySelector('.category_spawner');

        if (category_status.value.trim() == '' || category_name.value.trim() == '') {
            alert('Please fill all the fields!')
        } else {

            let unique_id = Date.now();

            let div = document.createElement('div');

            div.innerHTML = `
            <div data-category-id="${unique_id}" class="cursor-pointer category_tab rounded-full py-1 px-3 border flex items-center gap-2">
                <h1 class="text-sm">${category_name.value}</h1>
                <svg data-bs-target="#edit_cat" data-bs-toggle="modal" width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.31441" cy="7.84126" r="7.76753" fill="#E7E7E7" />
                    <path
                        d="M5.65729 10.829C5.6118 10.8289 5.56683 10.8194 5.52523 10.801C5.48363 10.7826 5.44631 10.7557 5.41566 10.7221C5.38444 10.6888 5.36063 10.6492 5.34576 10.6061C5.3309 10.5629 5.32534 10.517 5.32943 10.4716L5.40975 9.58806L9.12048 5.87763L10.2801 7.03726L6.57038 10.7474L5.68712 10.8277C5.67721 10.8286 5.66725 10.8291 5.65729 10.829ZM10.5116 6.8054L9.35228 5.64577L10.0477 4.95019C10.0781 4.9197 10.1143 4.89551 10.1541 4.879C10.1939 4.8625 10.2366 4.854 10.2796 4.854C10.3227 4.854 10.3654 4.8625 10.4052 4.879C10.445 4.89551 10.4811 4.9197 10.5116 4.95019L11.207 5.64577C11.2375 5.67623 11.2617 5.7124 11.2782 5.75221C11.2947 5.79202 11.3031 5.8347 11.3031 5.87779C11.3031 5.92089 11.2947 5.96357 11.2782 6.00338C11.2617 6.04319 11.2375 6.07936 11.207 6.10982L10.5119 6.80507L10.5116 6.8054Z"
                        fill="#555555" />
                </svg>
            </div>
        `;
            category_spawner.appendChild(div);

            let new_div = document.createElement('div');
            new_div.innerHTML = `
            <div data-category-id="${unique_id}" class="flex gap-6 flex-wrap subcategory_spawner hidden" data-subcategory-id="2">
                <div data-bs-target="#addSubCategory" data-bs-toggle="modal"
                    class="subcategory_opener min-h-[16rem] cursor-pointer text-center rounded-lg admin-card-hover p-3 min-w-[16rem] w-fit bg-white flex flex-col gap-4 items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.0026 36.6668V20.0002M20.0026 20.0002V3.3335M20.0026 20.0002H36.6693M20.0026 20.0002H3.33594"
                            stroke="#555555" stroke-width="5" stroke-linecap="round" />
                    </svg>

                    <h1>Add Subcategory</h1>
                </div>
            </div>
        `;

            let subcat_area = document.querySelector('.subcat_area')
            subcat_area.appendChild(new_div)

            category_fn();


            category_close.click();
        }
    })
    let category_fn = () => {

        let category_tab = document.querySelectorAll('.category_tab');
        category_tab.forEach((tab) => {
            tab.addEventListener('click', () => {
                let subcategory_spawner = document.querySelectorAll('.subcategory_spawner')
                let subcategory_spawner_active = document.querySelector(`.subcategory_spawner[data-category-id="${tab.getAttribute("data-category-id")}"]`);
                subcategory_spawner.forEach(all => {
                    all.classList.add('hidden');
                });
                subcategory_spawner_active.classList.remove('hidden')

                category_tab.forEach(all => { all.classList.remove('category_tab_active') });
                tab.classList.add('category_tab_active')

            })
        })


        let subcategory_opener_id = document.querySelector('.category_tab').getAttribute('data-category-id');
        let subcategory_opener = document.querySelectorAll('.subcategory_opener');
        subcategory_opener.forEach(card => {
            card.onclick = () => {
                let parent = card.closest('.subcategory_spawner');
                subcategory_opener_id = parent.getAttribute('data-category-id');
            }
        });

        let subcategory_btn = document.querySelector('.subcategory_btn');
        subcategory_btn.onclick = () => {
            let subcategory_name = document.querySelector('.subcategory_name');
            let subcategory_type = document.querySelector('.subcategory_type');
            let subcategory_status = document.querySelector('.subcategory_status');
            let subcategory_image = document.querySelector('.subcategory_image');

            console.log(subcategory_name.value, subcategory_type.value, subcategory_image.value);

            if (subcategory_opener_id != '') {
                if (subcategory_name.value.trim() == '' || subcategory_type.value.trim() == '' || subcategory_status.value.trim() == '' || subcategory_image.value.trim() == '') {
                    alert('fill all the fields!')
                } else {
                    let spawner = document.querySelector(`.subcategory_spawner[data-category-id="${subcategory_opener_id}"]`);
                    let div = document.createElement('div');
                    div.classList.add('delete_btn_p')
                    div.innerHTML = `
                <div
                class="text-center rounded-lg admin-card-hover p-4 min-w-[16rem] w-fit bg-white flex flex-col gap-3">
                <div class="flex items-center justify-between">
                    <div
                        class="rounded-full py-1 px-3 border border-[#05D672] bg-[#E7FFF3] text-sm text-[#05D672]">
                        ${subcategory_status.value}</div>
                    <div class="flex items-center gap-2">
                        <div
                            class="delete_btn cursor-pointer h-[2rem] w-[2rem] rounded-full border flex items-center justify-center">
                            <svg width="19" height="19" viewBox="0 0 9 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.51298 1.45849H4.99012C4.99012 1.26261 4.91231 1.07475 4.7738 0.936243C4.63529 0.797733 4.44743 0.71992 4.25155 0.71992C4.05567 0.71992 3.86781 0.797733 3.7293 0.936243C3.59079 1.07475 3.51298 1.26261 3.51298 1.45849ZM3.0206 1.45849C3.0206 1.13202 3.15028 0.818925 3.38113 0.588077C3.61198 0.357228 3.92508 0.227539 4.25155 0.227539C4.57802 0.227539 4.89111 0.357228 5.12196 0.588077C5.35281 0.818925 5.4825 1.13202 5.4825 1.45849H7.94441C8.0097 1.45849 8.07232 1.48443 8.11849 1.5306C8.16466 1.57677 8.1906 1.63939 8.1906 1.70468C8.1906 1.76998 8.16466 1.83259 8.11849 1.87876C8.07232 1.92493 8.0097 1.95087 7.94441 1.95087H7.42544L6.83753 7.04406C6.79598 7.40408 6.62351 7.73627 6.35296 7.9774C6.08241 8.21854 5.73265 8.3518 5.37024 8.35182H3.13286C2.77044 8.3518 2.42068 8.21854 2.15013 7.9774C1.87958 7.73627 1.70712 7.40408 1.66556 7.04406L1.07766 1.95087H0.55869C0.493397 1.95087 0.430777 1.92493 0.384608 1.87876C0.338438 1.83259 0.3125 1.76998 0.3125 1.70468C0.3125 1.63939 0.338438 1.57677 0.384608 1.5306C0.430777 1.48443 0.493397 1.45849 0.55869 1.45849H3.0206ZM3.75917 3.42801C3.75917 3.36272 3.73323 3.3001 3.68706 3.25393C3.64089 3.20776 3.57827 3.18182 3.51298 3.18182C3.44768 3.18182 3.38506 3.20776 3.33889 3.25393C3.29272 3.3001 3.26679 3.36272 3.26679 3.42801V6.3823C3.26679 6.44759 3.29272 6.51021 3.33889 6.55638C3.38506 6.60255 3.44768 6.62849 3.51298 6.62849C3.57827 6.62849 3.64089 6.60255 3.68706 6.55638C3.73323 6.51021 3.75917 6.44759 3.75917 6.3823V3.42801ZM4.99012 3.18182C4.92483 3.18182 4.86221 3.20776 4.81604 3.25393C4.76987 3.3001 4.74393 3.36272 4.74393 3.42801V6.3823C4.74393 6.44759 4.76987 6.51021 4.81604 6.55638C4.86221 6.60255 4.92483 6.62849 4.99012 6.62849C5.05541 6.62849 5.11803 6.60255 5.1642 6.55638C5.21037 6.51021 5.23631 6.44759 5.23631 6.3823V3.42801C5.23631 3.36272 5.21037 3.3001 5.1642 3.25393C5.11803 3.20776 5.05541 3.18182 4.99012 3.18182Z"
                                    fill="#555555" />
                            </svg>
                        </div>
                        <div
                        data-bs-target="#editSubCat" data-bs-toggle="modal"
                            class="cursor-pointer h-[2rem] w-[2rem] rounded-full border flex items-center justify-center">
                            <svg width="19" height="19" viewBox="0 0 8 7" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.0587 6.56892C1.01064 6.56884 0.963126 6.55875 0.919176 6.53931C0.875227 6.51986 0.835803 6.49148 0.803413 6.45597C0.770437 6.42076 0.745274 6.37898 0.729574 6.33336C0.713874 6.28774 0.707992 6.23931 0.712314 6.19126L0.797178 5.25785L4.71754 1.3378L5.9427 2.56295L2.02337 6.48265L1.09022 6.56754C1.07974 6.5685 1.06922 6.56896 1.0587 6.56892ZM6.18724 2.31799L4.96243 1.09284L5.69711 0.357965C5.72928 0.325751 5.76748 0.300195 5.80954 0.282759C5.85158 0.265322 5.89666 0.256348 5.94218 0.256348C5.9877 0.256348 6.03277 0.265322 6.07482 0.282759C6.11687 0.300195 6.15508 0.325751 6.18724 0.357965L6.92192 1.09284C6.95413 1.12502 6.97968 1.16323 6.99711 1.2053C7.01454 1.24736 7.02351 1.29244 7.02351 1.33798C7.02351 1.38351 7.01454 1.4286 6.99711 1.47066C6.97968 1.51272 6.95413 1.55093 6.92192 1.58311L6.18759 2.31764L6.18724 2.31799Z"
                                    fill="#555555" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="p-2 w-fit h-fit mx-auto rounded-full border border-[#FD9900]">
                    <div class="h-[6rem] w-[6rem] overflow-hidden rounded-full">
                        <img class="object-cover w-full h-full"
                            src='${URL.createObjectURL(subcategory_image.files[0])}' />
                    </div>
                </div>
                <h2 class="font-semibold">${subcategory_name.value}</h2>
                <p class="text-[#555555] text-sm">1200 Deals</p>
            </div>
                `;
                    spawner.appendChild(div);
                    subcategory_name.value = '';
                    subcategory_type.value = '';
                    subcategory_status.value = '';
                    subcategory_image.value = '';
                    document.querySelector('.subcat_close').click();
                    document.querySelectorAll('.delete_btn').forEach(del => {
                        del.onclick = function () {
                            del.closest('.delete_btn_p').remove();
                        }
                    });

                }
            } else {
                console.error('subcategory_opener_id not found !!!');
            }

        };
        document.querySelectorAll('.delete_btn').forEach(del => {
            del.onclick = function () {
                del.closest('.delete_btn_p').remove();
            }
        });
    }
    category_fn();
}

let business_tabs = document.querySelectorAll('.business_tab');
if (business_tabs.length > 0) {
    business_tabs.forEach(business_tab => {
        business_tab.addEventListener('click', () => {
            business_tabs.forEach(all => {
                all.classList.remove('business_tab_active')
            });
            business_tab.classList.add('business_tab_active');
            let data_div = document.querySelector(`.business_tab_data[tab-name="${business_tab.getAttribute('tab-name')}"]`);
            document.querySelectorAll(`.business_tab_data`).forEach(all => { all.classList.add('hidden') })
            data_div.classList.remove('hidden');
        })
    })
}


let steps = document.querySelector('.steps');
if (steps) {
    let step_one_form = document.querySelector('.step-one-form');
    let step_two_form = document.querySelector('.step-two-form');
    let step_three_form = document.querySelector('.step-three-form');

    let step_one_bar = document.querySelector('.step-one');
    let step_two_bar = document.querySelector('.step-two');
    let step_three_bar = document.querySelector('.step-three');

    let step_one_btn = document.querySelector('.step-one-btn');
    let deal_creator_form = document.querySelector('.deal_creator_form');
    let deal_title = document.querySelector('.deal_title')
    let deal_quantity = document.querySelector('.deal_quantity')
    let deal_actual_price = document.querySelector('.deal_actual_price')
    let deal_discount = document.querySelector('.deal_discount')
    let deal_description = document.querySelector('.deal_description')

    let step_one_btn_add = document.querySelector('.step-one-btn_add')
    let add_deal_btn = document.querySelector('.add_deal_btn')
    let add_another = document.querySelector('.add_another')
    let deal_card_render = document.querySelector('.deal_card_render')

    step_one_btn_add.addEventListener('click',()=>{
        deal_creator_form.classList.add('hidden');
        add_another.classList.remove('hidden');

        let div = document.createElement('div');
        div.innerHTML = ` <div class="rounded-lg shadow-md px-10 py-6 flex flex-col gap-3 relative">
        <div class="absolute top-0 left-0 rounded-br-[10px] bg-[#FD9900] px-3 py-2 text-white">
            ${deal_card_render.childElementCount + 1}
        </div>

        <h1 class="font-semibold text-lg">${deal_title.value}</h1>
        <p class="text-[#5D5F5F]">${deal_description.value}</p>
        <h1 class="font-bold text-lg flex items-center gap-2">
            <span>$${deal_actual_price.value - deal_discount.value}</span>
            <span class="line-through text-sm text-[#B6B8B8]">$${deal_actual_price.value}</span>
        </h1>
    </div>`
        deal_card_render.appendChild(div);
        
    })

    add_deal_btn.addEventListener('click',()=>{
        add_another.classList.add('hidden');
        deal_creator_form.classList.remove('hidden');
        deal_title = ''
        deal_quantity.value = ''
        deal_actual_price.value = ''
        deal_discount.value = ''
        deal_description.value = ''

    })

    step_one_btn.addEventListener('click', () => {

        step_one_form.classList.add('hidden');
        step_two_form.classList.remove('hidden');
        step_one_bar.classList.add('step-active-fill');
        step_two_bar.classList.add('step-active');
    });

    let step_two_btn = document.querySelector('.step-two-btn');
    step_two_btn.addEventListener('click', () => {
        step_two_form.classList.add('hidden');
        step_three_form.classList.remove('hidden');
        step_two_bar.classList.add('step-active-fill');
        step_three_bar.classList.add('step-active');
    });
}

let img_preview = document.querySelector('.img_preview');
if (img_preview) {
    let img_upload = document.querySelector('.img_upload');
    img_upload.addEventListener('input', () => {
        img_preview.src = URL.createObjectURL(img_upload.files[0])
    })

    let remove_img = document.querySelector('.remove_img');
    remove_img.addEventListener('click', () => {
        img_preview.src = 'https://www.underseaproductions.com/wp-content/uploads/2013/11/dummy-image-square.jpg';
        img_upload.value = ''
    })

};

let time_counter = document.querySelector('.time_counter');
if (time_counter) {

    // Set the date we're counting down to
    var countDownDate = new Date(time_counter.getAttribute('data-date')).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"

        let counter_days = document.querySelector('.counter_days');
        let counter_hrs = document.querySelector('.counter_hrs');
        let counter_mins = document.querySelector('.counter_mins');
        let counter_secs = document.querySelector('.counter_secs');

        counter_days.innerText = days > 0 ? days : '00';
        counter_hrs.innerText = hours > 0 ? hours : '00';
        counter_mins.innerText = minutes > 0 ? minutes : '00';
        counter_secs.innerText = seconds > 0 ? seconds : '00';


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
}
