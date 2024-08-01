import {Banner} from '@/components/Banner/Banner';
import {ButtonClient} from '@/components/ButtonClient/ButtonClient';
import {CardImage} from '@/components/CardImage/CardImage';
import {HouseCard} from '@/components/HouseCard/HouseCard';
import {Promotion} from '@/components/Promotion/Promotion';
import {Card, Text} from '@gravity-ui/uikit';
import {Bath} from './bani-iz-sruba/page';
import {House} from './doma-iz-sruba/page';
import css from './styles.module.scss';

async function getData() {
    const resBath = await fetch('http://194.58.126.86/api/baths');
    const resHouse = await fetch('http://194.58.126.86/api/houses');

    if (!resBath.ok || !resHouse.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const dataBath: Bath[] = await resBath.json();
    const dataHouses: House[] = await resHouse.json();

    return dataBath.concat(dataHouses);
}

export default async function Home() {
    const data = await getData();

    return (
        <div className={css.Home}>
            <div className={css.Home__content}>
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
                <div className={css.Home__quality}>
                    <Text
                        className={css.Home__qualityTitle}
                        variant="display-1"
                        color="light-primary"
                    >
                        Контроль качества в три этапа
                    </Text>
                    <div className={css.Home__qualityList}>
                        <div className={css.Home__qualityItem}>
                            <img
                                className={css.Home__qualityIcon}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/check-1.webp"
                                alt=""
                            />
                            <Text
                                className={css.Home__qualityItemText}
                                variant="body-3"
                                color="light-primary"
                            >
                                На этапе заготовки - выбираем лес исключительно высшего качества,
                                прямые квоты на добычу.
                            </Text>
                        </div>
                        <div className={css.Home__qualityItem}>
                            <img
                                className={css.Home__qualityIcon}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/check-1.webp"
                                alt=""
                            />
                            <Text
                                className={css.Home__qualityItemText}
                                variant="body-3"
                                color="light-primary"
                            >
                                На этапе заготовки - выбираем лес исключительно высшего качества,
                                прямые квоты на добычу.
                            </Text>
                        </div>
                        <div className={css.Home__qualityItem}>
                            <img
                                className={css.Home__qualityIcon}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/check-1.webp"
                                alt=""
                            />
                            <Text
                                className={css.Home__qualityItemText}
                                variant="body-3"
                                color="light-primary"
                            >
                                На этапе заготовки - выбираем лес исключительно высшего качества,
                                прямые квоты на добычу.
                            </Text>
                        </div>
                    </div>
                    <Text className={css.Home__qualityDesc} variant="body-3" color="light-primary">
                        Для вас такой тщательный подход означает только одно - с нами вы можете быть
                        спокойны за результат строительства вашего прекрасного сруба, будь то баня
                        или дом. Вы гарантированно получите качественный лес по приемлемой стоимости
                        и не менее качественную рубку. В отличии от многих наших конкурентов,
                        например, при рубке "в чашу" мы делаем округлый контактный паз на бревне,
                        так называемый "лунный" без дополнительной оплаты, уже в начальной
                        комплектации.
                    </Text>
                </div>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Наш блог
                            </Text>

                            <div className={css.Home__cards}>
                                <CardImage
                                    link="/blog/kak-my-otbiraem-les-dlya-srubov"
                                    title={
                                        <Text variant="header-1" color="complementary">
                                            Как мы отбираем лес для срубов
                                        </Text>
                                    }
                                    action={
                                        <ButtonClient
                                            size="xl"
                                            view="action"
                                            style={{width: '100%'}}
                                        >
                                            Читать
                                        </ButtonClient>
                                    }
                                />
                                <CardImage
                                    link="/blog/razlichiya-i-skhozhest-russkoy-bani-i-finskoy-sauny"
                                    title={
                                        <Text variant="header-1" color="complementary">
                                            Как мы отбираем лес для срубов
                                        </Text>
                                    }
                                    action={
                                        <ButtonClient
                                            size="xl"
                                            view="action"
                                            style={{width: '100%'}}
                                        >
                                            Читать
                                        </ButtonClient>
                                    }
                                />
                                <CardImage
                                    link="/blog/preimushchestva-vybora-sruba-iz-dereva/"
                                    title={
                                        <Text variant="header-1" color="complementary">
                                            Как мы отбираем лес для срубов
                                        </Text>
                                    }
                                    action={
                                        <ButtonClient
                                            size="xl"
                                            view="action"
                                            style={{width: '100%'}}
                                        >
                                            Читать
                                        </ButtonClient>
                                    }
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={css.Home__advantages}>
                    <Text
                        className={css.Home__advantagesTitle}
                        variant="display-1"
                        color="light-primary"
                    >
                        Контроль качества в три этапа
                    </Text>
                    <div className={css.Home__advantagesList}>
                        <div className={css.Home__advantagesCard}>
                            <img
                                className={css.Home__advantagesCardImage}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/rub.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Действительные цены
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    На сайте указаны именно те цены, которые мы озвучим вам по
                                    телефону и ровно по ним заключим договор на строительство. Все
                                    заявленные акции, также действительны!
                                </Text>
                            </div>
                        </div>
                        <div className={css.Home__advantagesCard}>
                            <img
                                className={css.Home__advantagesCardImage}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/rub.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Действительные цены
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    На сайте указаны именно те цены, которые мы озвучим вам по
                                    телефону и ровно по ним заключим договор на строительство. Все
                                    заявленные акции, также действительны!
                                </Text>
                            </div>
                        </div>
                        <div className={css.Home__advantagesCard}>
                            <img
                                className={css.Home__advantagesCardImage}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/rub.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Действительные цены
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    На сайте указаны именно те цены, которые мы озвучим вам по
                                    телефону и ровно по ним заключим договор на строительство. Все
                                    заявленные акции, также действительны!
                                </Text>
                            </div>
                        </div>
                        <div className={css.Home__advantagesCard}>
                            <img
                                className={css.Home__advantagesCardImage}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/rub.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Действительные цены
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    На сайте указаны именно те цены, которые мы озвучим вам по
                                    телефону и ровно по ним заключим договор на строительство. Все
                                    заявленные акции, также действительны!
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                3D проекты срубов
                            </Text>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                Специально для вас, в сотрудничестве с профессиональными
                                архитекторами мы разработали интересные проекты домов и бань из
                                бревна. Некоторые заказчики упускают из вида тот фактор, что сруб -
                                это не просто коробка из брёвен, а прежде всего комфортное и
                                функциональное строение. Как показывает наш многолетний опыт
                                строительства, чаще всего, не достаточно обойтись стандартной
                                планировкой сруба "пятистенка".
                                <br />
                                <br />
                                Важно сделать проект удобным и красивым. Все представленные у нас
                                проекты, от планировки до 3D-визуализации - плод нашей работы. Но вы
                                всегда можете попросить внести своё собственное творческое решение и
                                мы доработаем любой из проектов под вашу задумку.
                                <br />
                                <br />
                                Строения из бревна некоторые из вас считают менее надежными, чем
                                камень, кирпич, пеноблок. Но на просторах нашей Родины существует
                                огромное количество подтверждений надежности и долговечности срубов.
                                В разных уголках страны можно встретить дома и целые терема из
                                бревна, которым не десятки, а сотни лет. Естественно, они находятся
                                под охраной Государства и за ними тщательно ухаживают, но это
                                говорит именно о том, что и ваш сруб, при должном уходе, послужит не
                                только вам, но и внукам, и даже правнукам. Вам остаётся только
                                выбрать интересный проект.
                            </Text>
                        </div>
                    </Card>
                </div>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary">
                                Проекты бань из бревна
                            </Text>
                            <div className={css.Home__projects}>
                                {data.map((item) => (
                                    <HouseCard key={item.id} bath={item} />
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
