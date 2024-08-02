import {Banner} from '@/components/Banner/Banner';
import {Promotion} from '@/components/Promotion/Promotion';
import {Card, Text} from '@gravity-ui/uikit';
import Link from 'next/link';
import css from './styles.module.scss';

export default function Contacts() {
    return (
        <div>
            <div className={css.Contacts__content}>
                <Banner />
                <div className={'base-block'}>
                    <Card
                        view="raised"
                        type="container"
                        size="l"
                        style={{
                            maxWidth: 1100,
                        }}
                    >
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Срубы ручной рубки с доставкой и сборкой
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Наша компания уже более 20 лет работает для вас. Индивидуальный
                                подход к каждому проекту позволит вам получить действительно
                                качественный сруб. В нашей работе мы используем отборный строевой
                                лес, объем которого ограничен, но мы получаем прямые квоты на добычу
                                и выбор делянок. Бесплатная доставка и сборка рубленных домов и бань
                                производится в Москве и области, Санкт-Петербурге и области,
                                Калужской, Тульской, Смоленской, Тверской, Псковской и Брянской
                                областях. Доставка в другие регионы РФ и республику Белоруссию
                                согласуются отдельно.
                            </Text>
                        </div>
                    </Card>
                </div>
                <Promotion />
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Контакты
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Вы можете позвонить нам по телефону, написать в мессенджере, по
                                электронной почте или через встроенный в сайт чат. Но лучше всего
                                договориться о встрече в нашем офисе на выставке. Ждём вас в гости
                                на нашей выставочноей площадке, где мы наглядно продемонстрируем
                                качество нашего сруба, расскажем про все нюансы строительства и
                                ответим на все, даже самый каверзные вопросы. Убедительная просьба,
                                пожалуйста, прежде, чем выехать к нам, позвоните, менеджер иногда
                                выезжает на строительные объекты.
                                <br />
                                <br />
                                Для вашего удобства мы запустили услугу "Онлайн-офис". Если вы
                                хотите заказать рубленный из бревна дом или баню, но у Вас нет
                                возможности приехать к нам в офис для уточнения всех деталей, то
                                просто закажите выезд нашего менеджера к вам. Вам не придется
                                тратить свое время, просто оставьте заявку на сайте и мы перезвоним
                                для согласования удобного времени для онлайн встречи.
                            </Text>
                        </div>
                    </Card>
                </div>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Москва и Московская область
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="header-1" className="main-title">
                                Телефоны
                            </Text>
                            <div className={css.Contacts__phones}>
                                <Link href="tel:+74957681709">
                                    <Text
                                        variant="subheader-3"
                                        color="light-primary"
                                        className={css.Contacts__phone}
                                    >
                                        +7 (495) 768-17-09
                                    </Text>
                                </Link>
                                <Link href="tel:+78129203245">
                                    <Text
                                        variant="subheader-3"
                                        color="light-primary"
                                        className={css.Contacts__phone}
                                    >
                                        +7 (812) 920-32-45
                                    </Text>
                                </Link>
                            </div>
                            <Text
                                variant="header-1"
                                color="complementary"
                                className="main-title"
                                style={{
                                    marginTop: 16,
                                }}
                            >
                                Email
                            </Text>
                            <Link href="mailto:info@moy-srub.ru">
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Contacts__phone}
                                >
                                    info@moy-srub.ru
                                </Text>
                            </Link>
                            <Text
                                variant="header-1"
                                color="complementary"
                                className="main-title"
                                style={{
                                    marginTop: 16,
                                }}
                            >
                                Адрес
                            </Text>
                            <Text variant="body-3" color="dark-secondary">
                                Московская область, Дзержинское ш., вл. 7/7, участок 106, “Белая
                                Дача”
                                <br />
                                Внимание, по техническим причинам до 22.02.24 выставочный образец
                                закрыт, работаем онлайн!
                                <br />
                                Посещение выставочного образца по вторникам и четвергам строго по
                                согласованию!
                                <br />
                            </Text>
                        </div>
                    </Card>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.850182%2C55.653351&mode=usermaps&source=mapframe&um=constructor%3A081caaae5ba1a85c71487d89740a461e336fc23cce7cd319e112ed7ed1e86a45&utm_source=mapframe&z=20"
                    height="500"
                    frameBorder={1}
                    allowFullScreen={true}
                ></iframe>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Санкт-Петербург и Ленинградская область
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="header-1" className="main-title">
                                Телефоны
                            </Text>
                            <div className={css.Contacts__phones}>
                                <Link href="tel:+78129203245">
                                    <Text
                                        variant="subheader-3"
                                        color="light-primary"
                                        className={css.Contacts__phone}
                                    >
                                        +7 (812) 920-32-45
                                    </Text>
                                </Link>
                                <Link href="tel:+79197868745">
                                    <Text
                                        variant="subheader-3"
                                        color="light-primary"
                                        className={css.Contacts__phone}
                                    >
                                        +7 (919) 786-87-45
                                    </Text>
                                </Link>
                            </div>
                            <Text
                                variant="header-1"
                                color="complementary"
                                className="main-title"
                                style={{
                                    marginTop: 16,
                                }}
                            >
                                Email
                            </Text>
                            <Link href="mailto:info@moy-srub.ru">
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Contacts__phone}
                                >
                                    info@moy-srub.ru
                                </Text>
                            </Link>
                            <Text
                                variant="header-1"
                                color="complementary"
                                className="main-title"
                                style={{
                                    marginTop: 16,
                                }}
                            >
                                Адрес в Санкт-Петербурге
                            </Text>
                            <Text variant="body-3" color="dark-secondary">
                                Россия, Санкт-Петербург, улица Коллонтай, 18
                                <br />! Просьба ! Перед приездом, обязательно звоните !
                            </Text>
                        </div>
                    </Card>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.850182%2C55.653351&mode=usermaps&source=mapframe&um=constructor%3A081caaae5ba1a85c71487d89740a461e336fc23cce7cd319e112ed7ed1e86a45&utm_source=mapframe&z=20"
                    height="500"
                    frameBorder={1}
                    allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    );
}
