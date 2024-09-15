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
                                Наша компания уже более 7 лет работает для вас. Индивидуальный
                                подход к каждому проекту позволит вам получить действительно
                                качественный сруб. В нашей работе мы используем отборный строевой
                                лес. Доставка и сборка рубленных домов и бань производится в
                                Самарской и Ульяновской области . Доставка и сборка в другие регионы
                                РФ согласуются отдельно.
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
                                Самара и Самарская область
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
                                        +7 (917) 036-71-77{' '}
                                    </Text>
                                </Link>
                                <Link href="tel:+78129203245">
                                    <Text
                                        variant="subheader-3"
                                        color="light-primary"
                                        className={css.Contacts__phone}
                                    >
                                        +7 (917) 104-91-81{' '}
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
                                Самарская область, город Самара Стара- Загора 172 А
                            </Text>
                        </div>
                    </Card>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=50.241327%2C53.249990&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM4NDI3NBJF0KDQvtGB0YHQuNGPLCDQodCw0LzQsNGA0LAsINGD0LvQuNGG0LAg0KHRgtCw0YDQsC3Ql9Cw0LPQvtGA0LAsIDE3MtCQIgoNH_dIQhX-_1RC&z=17.21"
                    height="500"
                    frameBorder={1}
                    allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    );
}
