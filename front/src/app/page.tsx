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
    const resBath = await fetch('https://volga-house.com/api/baths', {
        mode: 'no-cors',
        headers: {
            'Cache-Control': 'no-store',
        },
    });
    const resHouse = await fetch('https://volga-house.com/api/houses', {
        mode: 'no-cors',
        headers: {
            'Cache-Control': 'no-store',
        },
    });

    const dataBath: Bath[] = await resBath.json();
    const dataHouses: House[] = await resHouse.json();

    return {
        baths: dataBath ?? [],
        houses: dataHouses ?? [],
    };
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
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/check-2.webp"
                                alt=""
                            />
                            <Text
                                className={css.Home__qualityItemText}
                                variant="body-3"
                                color="light-primary"
                            >
                                На этапе рубки - если бревно не соответствует стандартам, то оно
                                просто не используется
                            </Text>
                        </div>
                        <div className={css.Home__qualityItem}>
                            <img
                                className={css.Home__qualityIcon}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/check-3.webp"
                                alt=""
                            />
                            <Text
                                className={css.Home__qualityItemText}
                                variant="body-3"
                                color="light-primary"
                            >
                                На этапе сборки - мы еще раз проверяем бревна и пиломатериалы на
                                соответствие стандарту.
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
                                    image="https://moy-srub.ru/upload/iblock/30e/twjvp12izvzjzoadyyrcnk148ayhbt1g.webp"
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
                                    image="https://moy-srub.ru/upload/iblock/f85/67hhienkxapy9e221lv3khyf4x6aofx1.webp"
                                    title={
                                        <Text variant="header-1" color="complementary">
                                            Различия и схожесть русской бани и финской сауны
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
                                    image="https://moy-srub.ru/upload/iblock/7df/rm06wzrbgf3gm0blzcouiydcoyojni54.webp"
                                    title={
                                        <Text variant="header-1" color="complementary">
                                            Преимущества выбора сруба из дерева
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
                        Ваши преимущества
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
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/20let.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Опытные мастера
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    Мы строим срубы для вас с 1997-го года. Опытнейшие специалисты
                                    являются гарантией качественного результата, наши дома и бани
                                    служат людям десятилетиями!
                                </Text>
                            </div>
                        </div>
                        <div className={css.Home__advantagesCard}>
                            <img
                                className={css.Home__advantagesCardImage}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/pila.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Собственные мощности
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    В любом случае, от нас вы получите наиболее выгодное
                                    предложение. У нас собственный транспорт, техника, квоты на
                                    добычу и даже пилорама для производства доски и бруса!
                                </Text>
                            </div>
                        </div>
                        <div className={css.Home__advantagesCard}>
                            <img
                                className={css.Home__advantagesCardImage}
                                src="https://moy-srub.ru/bitrix/templates/moysrub/images/search.webp"
                                alt=""
                            />
                            <div className={css.Home__advantagesCardInfo}>
                                <Text
                                    variant="subheader-3"
                                    color="light-primary"
                                    className={css.Home__advantagesCardTitle}
                                >
                                    Честный подход
                                </Text>
                                <Text
                                    variant="body-2"
                                    color="light-primary"
                                    className={css.Home__advantagesCardDesc}
                                >
                                    Мы не скрываем процесс заготовки, сборки, обработки или отделки
                                    срубов. Вы можете в любой момент ознакомиться с ходом работ не
                                    только на участке, но и на делянке!
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
                                Проекты бань из сруба
                            </Text>
                            <div className={css.Home__projects}>
                                {data.baths.map((item) => (
                                    <HouseCard route="bani-iz-sruba" key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary">
                                Проекты домов из сруба
                            </Text>
                            <div className={css.Home__projects}>
                                {data.houses.map((item) => (
                                    <HouseCard route="doma-iz-sruba" key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
