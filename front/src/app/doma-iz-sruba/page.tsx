import {ButtonClient} from '@/components/ButtonClient/ButtonClient';
import {HouseCard} from '@/components/HouseCard/HouseCard';
import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

type BathInfoItem = {
    title: string;
    values: string[][];
};

export type House = {
    id: number;
    area: number;
    price: string;
    name: string;
    description: string;
    log_size: string;
    hallway: string;
    src: string;
    images: string[];
    information: BathInfoItem[];
    characteristic: string[];
    complection: string[];
};

async function getData() {
    const res = await fetch('http://194.58.126.86/api/houses');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return [];
    }

    return res.json();
}

export default async function Houses() {
    const houses: House[] = await getData();

    return (
        <div>
            <div className={css.Houses__content}>
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
                                Срубы домов из бревна ручной рубки
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Чтобы сэкономить ваше время в выборе подрядчика для строительства,
                                мы приводим подробный прайс-лист на базовые размеры и планировки
                                срубов домов. Мы постарались учесть все возможные комбинации
                                этажности, различные типы мансард, видов рубки, фронтонов и "пятых
                                стен" - перерубов. Но если вы хотите что-то более функциональное, с
                                продуманной планировкой и первоклассным внешним видом, то
                                рекомендуем вам перейти к готовым проектам, разработанными и
                                визуализированными для вас профессиональными архитекторами, в
                                котором вы найдёте прекрасные дома на любой вкус, размер участка и
                                бюджет.
                            </Text>
                            <div className={css.Houses__actions}>
                                <ButtonClient
                                    className={css.Houses__action}
                                    size="xl"
                                    view="action"
                                    pin="circle-circle"
                                >
                                    ПРАЙС НА ДОМА РУБКИ "В ЛАПУ"
                                </ButtonClient>
                                <ButtonClient
                                    className={css.Houses__action}
                                    size="xl"
                                    view="action"
                                    pin="circle-circle"
                                >
                                    ПРАЙС НА ДОМА РУБКИ "В ЧАШУ"
                                </ButtonClient>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary">
                                Проекты домов из бревна
                            </Text>
                            <div className={css.Houses__projects}>
                                {houses.map((item) => (
                                    <HouseCard route="doma-iz-sruba" key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Комплектация поставки сруба под усадку
                            </Text>
                            <div>
                                <Text
                                    variant="header-1"
                                    color="dark-complementary"
                                    className="main-title"
                                    style={{
                                        marginTop: 32,
                                        marginLeft: 16,
                                    }}
                                >
                                    Территория бесплатной доставки и сборки срубов
                                </Text>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 32,
                                    }}
                                >
                                    Проверьте таблицу актуальности доставки, чтобы убедиться, что
                                    доставка для вас не будет ничего стоить:
                                    <br />
                                    <ul>
                                        <li>
                                            В радиусе 100 км от Москвы (МКАД), в некоторых
                                            направлениях до 350 км;
                                        </li>
                                        <li>В Смоленскую и Псковскую области;</li>
                                        <li>На юг Ленинградской области;</li>
                                        <li>Калужскую, Тульскую, Брянскую и Тверскую области.</li>
                                    </ul>
                                    Во всех остальных случаях доставка рассчитывается индивидуально.
                                </Text>
                                <Text
                                    variant="header-1"
                                    color="dark-complementary"
                                    className="main-title"
                                    style={{
                                        marginTop: 32,
                                        marginLeft: 16,
                                    }}
                                >
                                    Комплектация срубов бань
                                </Text>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 32,
                                    }}
                                >
                                    На нашем сайте, а также во всех рекламных материалах,
                                    указывается стоимость базовой комплектации, независимо от того,
                                    по какой технологии строится сруб. В цену базовой комплектации
                                    уже включены:
                                    <br />
                                    <ul>
                                        <li>
                                            Сруб из бревна: сам колодец, рубленный "в чашу" с
                                            "лунным пазом" или "в лапу" с "угловым пазом";
                                        </li>
                                        <li>
                                            Пятая стена, отёсанная с двух сторон при рубке "в лапу",
                                            "в чашу" кругляк, врезана под 90', по меньшей стороне;
                                        </li>
                                        <li>Потолочные балки из бревна;</li>
                                        <li>
                                            Доска обрезная 25 мм на зашивку фронтонов, если они не
                                            рубленные;
                                        </li>
                                        <li>
                                            Рубероид для крыши и гидроизоляции фундамента в случае
                                            бесплатного столбчатого;
                                        </li>
                                        <li>
                                            Стропила под двухскатную или ломанную крышу. Фронтон по
                                            меньшей стороне;
                                        </li>
                                        <li>
                                            При стандартной крыше бани высота конька 1,5-2,2 м, при
                                            двухскатной мансарде 3,3-4 м;
                                        </li>
                                        <li>
                                            В случае ломанной крыши для стропил поставляется доска
                                            150x50 мм, стойки и окантовка комнаты из бруса 100x100
                                            мм;
                                        </li>
                                        <li>
                                            Утеплитель между бревнами мох или джут в зависимости от
                                            сезона;
                                        </li>
                                        <li>
                                            Столбчатый фундамент из блоков 20x20x40 см (входит до
                                            размера 6х4 м включительно);
                                        </li>
                                        <li>
                                            Высота потолка бани в чистоте после укладки пола 2,1-2,2
                                            м;
                                        </li>
                                        <li>
                                            Диаметр бревна бани в среднем 22-26 см (можно
                                            увеличить);
                                        </li>
                                        <li>
                                            Диаметр бревна для пятой стены на 16-20 см (можно
                                            увеличить).
                                        </li>
                                    </ul>
                                    «Рабочий колодец» для Вашего будущего дома или бани мы рубим на
                                    собственной лесной делянке, где очень тщательно подгоняем каждое
                                    бревно, после чего все бревна нумеруются, и сруб в разобранном
                                    виде отправляется к вам. Сборка и доставка материала на Вашем
                                    участке уже включены в его стоимость для регионов указанных
                                    выше.
                                </Text>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Стоимость рубленных домов
                            </Text>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                Указанные в таблице цены являются окончательными при условии
                                соблюдения комплектации и параметров доставки. Если у вас есть
                                дополнительные пожелания, то стоимость может измениться, как в
                                большую, так и в меньшую сторону. Дома рубятся на условиях
                                предоплаты, которая составляет от 10% стоимости сруба, в редких
                                случаях, если дом нестандартной планировки или непопулярного
                                проекта, доля предоплаты может возрасти до 30%. Вторая часть оплаты
                                происходит уже после доставки всех материалов на объект, а третья
                                после окончательной сборки дома под усадку.
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Цены на рубленные дома "в чашу" с "лунным пазом"
                            </Text>
                            <div
                                className="scroll-x"
                                style={{marginTop: 32, overflowX: 'scroll', maxWidth: '100%'}}
                            >
                                <table className="table-srubi table-xs">
                                    <thead>
                                        <tr>
                                            <td>Размер сруба (внутренний)</td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу со стандартной двускатной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/d60/d6096453adafe1a719d252f0063313eb.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу со стандартной крышей"
                                                />
                                                <br />
                                                Стандартным комплект
                                            </td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу с ломаной мансардной крышей увеличенной высоты"
                                                    src="	https://moy-srub.ru/upload/medialibrary/a4e/a4e9e29a7c4b6aeec6d9e56b74d5ee4c.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу с ломаной мансардой"
                                                />
                                                <br />
                                                Комплектом с мансардой
                                            </td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу с выносом под веранду и со стандартной двускатной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/023/02357f5c10245e47e07f2667cf1ae125.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу со стандартной крышей и верандой"
                                                />
                                                <br />
                                                Комплект с выпуском 2 м
                                            </td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу с выносом под веранду и с ломаной мансардной крышей увеличенной высоты"
                                                    src="https://moy-srub.ru/upload/medialibrary/68e/68e7a159d153e5be85b6c88985aaef64.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу с ломаной мансардой и верандой"
                                                />
                                                <br />
                                                Комплект, с выпуском 2 м и мансардой
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={9}>
                                                Высота потолка в чистоте <strong>2,5 м</strong>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>5x6</strong>
                                            </td>
                                            <td colSpan={2}>499 000 ₽</td>
                                            <td colSpan={2}>585 000 ₽</td>
                                            <td colSpan={2}>559 000 ₽</td>
                                            <td colSpan={2}>649&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x6</strong>
                                            </td>
                                            <td colSpan={2}>579&nbsp;000 ₽</td>
                                            <td colSpan={2}>659 000 ₽</td>
                                            <td colSpan={2}>625 000 ₽</td>
                                            <td colSpan={2}>729&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x7</strong>
                                            </td>
                                            <td colSpan={2}>635&nbsp;000 ₽</td>
                                            <td colSpan={2}>729 000 ₽</td>
                                            <td colSpan={2}>685 000 ₽</td>
                                            <td colSpan={2}>799 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x8</strong>
                                            </td>
                                            <td colSpan={2}>709 000 ₽</td>
                                            <td colSpan={2}>829&nbsp;000 ₽</td>
                                            <td colSpan={2}>819 000 ₽</td>
                                            <td colSpan={2}>869 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x9</strong>
                                            </td>
                                            <td colSpan={2}>799 000 ₽</td>
                                            <td colSpan={2}>929 000 ₽</td>
                                            <td colSpan={2}>889 000 ₽</td>
                                            <td colSpan={2}>999&nbsp;000&nbsp;₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>7х8</strong>
                                            </td>
                                            <td colSpan={2}>830 000 ₽</td>
                                            <td colSpan={2}>959 000 ₽</td>
                                            <td colSpan={2}>930 000 ₽</td>
                                            <td colSpan={2}>979&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>8х8</strong>
                                            </td>
                                            <td colSpan={2}>949 000 ₽</td>
                                            <td colSpan={2}>1 099 000 ₽</td>
                                            <td colSpan={2}>1 020 000 ₽</td>
                                            <td colSpan={2}>1 199 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>8х9</strong>
                                            </td>
                                            <td colSpan={2}>1 050 000 ₽</td>
                                            <td colSpan={2}>1 190 000 ₽</td>
                                            <td colSpan={2}>1 170 000 ₽</td>
                                            <td colSpan={2}>1 280 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>9х9</strong>
                                            </td>
                                            <td colSpan={2}>1 190 000 ₽</td>
                                            <td colSpan={2}>1 370 000 ₽</td>
                                            <td colSpan={2}>1 355 000 ₽</td>
                                            <td colSpan={2}>1 470 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={9}>
                                                <b>
                                                    <span style={{color: '#ff0000'}}>
                                                        Дома бОльших размеров по запросу!
                                                    </span>
                                                </b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Цены на рубленные дома "в чашу" с "лунным пазом"
                            </Text>
                            <div
                                className="scroll-x"
                                style={{marginTop: 32, overflow: 'scroll', maxWidth: '100%'}}
                            >
                                <table className="table-srubi table-xs">
                                    <thead>
                                        <tr>
                                            <td>Размер сруба (внутренний)</td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу со стандартной двускатной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/d60/d6096453adafe1a719d252f0063313eb.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу со стандартной крышей"
                                                />
                                                <br />
                                                Стандартным комплект
                                            </td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу с ломаной мансардной крышей увеличенной высоты"
                                                    src="	https://moy-srub.ru/upload/medialibrary/a4e/a4e9e29a7c4b6aeec6d9e56b74d5ee4c.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу с ломаной мансардой"
                                                />
                                                <br />
                                                Комплектом с мансардой
                                            </td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу с выносом под веранду и со стандартной двускатной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/023/02357f5c10245e47e07f2667cf1ae125.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу со стандартной крышей и верандой"
                                                />
                                                <br />
                                                Комплект с выпуском 2 м
                                            </td>
                                            <td colSpan={2}>
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов домов в лапу с выносом под веранду и с ломаной мансардной крышей увеличенной высоты"
                                                    src="https://moy-srub.ru/upload/medialibrary/68e/68e7a159d153e5be85b6c88985aaef64.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба дома в лапу с ломаной мансардой и верандой"
                                                />
                                                <br />
                                                Комплект, с выпуском 2 м и мансардой
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={9}>
                                                Высота потолка в чистоте <strong>2,5 м</strong>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>5x6</strong>
                                            </td>
                                            <td colSpan={2}>690 000 ₽</td>
                                            <td colSpan={2}>745 000 ₽</td>
                                            <td colSpan={2}>750 000 ₽</td>
                                            <td colSpan={2}>790&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x6</strong>
                                            </td>
                                            <td colSpan={2}>730&nbsp;000 ₽</td>
                                            <td colSpan={2}>790 000 ₽</td>
                                            <td colSpan={2}>790 000 ₽</td>
                                            <td colSpan={2}>870&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x7</strong>
                                            </td>
                                            <td colSpan={2}>815&nbsp;000 ₽</td>
                                            <td colSpan={2}>895 000 ₽</td>
                                            <td colSpan={2}>880 000 ₽</td>
                                            <td colSpan={2}>950 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x8</strong>
                                            </td>
                                            <td colSpan={2}>895 000 ₽</td>
                                            <td colSpan={2}>970&nbsp;000 ₽</td>
                                            <td colSpan={2}>955 000 ₽</td>
                                            <td colSpan={2}>1 075 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>6x9</strong>
                                            </td>
                                            <td colSpan={2}>995 000 ₽</td>
                                            <td colSpan={2}>1 095 000 ₽</td>
                                            <td colSpan={2}>1 070 000 ₽</td>
                                            <td colSpan={2}>1 190&nbsp;000&nbsp;₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>7х8</strong>
                                            </td>
                                            <td colSpan={2}>1 070 000 ₽</td>
                                            <td colSpan={2}>1 190 000 ₽</td>
                                            <td colSpan={2}>1 160 000 ₽</td>
                                            <td colSpan={2}>1 275&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>8х8</strong>
                                            </td>
                                            <td colSpan={2}>1 180 000 ₽</td>
                                            <td colSpan={2}>1 299 000 ₽</td>
                                            <td colSpan={2}>1 265 000 ₽</td>
                                            <td colSpan={2}>1 365 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>8х9</strong>
                                            </td>
                                            <td colSpan={2}>1 330 000 ₽</td>
                                            <td colSpan={2}>1 450 000 ₽</td>
                                            <td colSpan={2}>1 420 000 ₽</td>
                                            <td colSpan={2}>1 520 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={9}>
                                                <b>
                                                    <span style={{color: '#ff0000'}}>
                                                        Дома бОльших размеров по запросу!
                                                    </span>
                                                </b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Преимущество бревна ручной рубки
                            </Text>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                Бревенчатые дома обладают рядом преимуществ по сравнению с другими
                                технологиями строительства. Так, например, в знойный летний день в
                                срубе всегда будет сохраняться приятная свежесть и прохлада, тогда,
                                как зимой, наоборот, будет тепло. Не маловажным фактором рубленного
                                дома является неплохая шумоизоляция между комнатами. В щитовых или
                                брусовых домах звук распространяется невероятно сильно. если двое
                                будут находиться в разных комнатах и разделены одной стеной, то
                                можно будет переговариваться вполне спокойным тоном и понимать
                                собеседника. Дом из бревна ручной рубки лишён данного недостатка.
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text
                                variant="display-2"
                                color="complementary"
                                className="main-title"
                                style={{marginBottom: 16}}
                            >
                                Видео о банях из сруба
                            </Text>
                            <div className="base-videos">
                                <div className="video video--enabled">
                                    <iframe
                                        src="https://www.youtube.com/embed/geS_QAlksdk?rel=0&amp;showinfo=0&amp;autoplay=1"
                                        className="video__media"
                                    ></iframe>
                                </div>
                                <div className="video video--enabled">
                                    <iframe
                                        src="https://www.youtube.com/embed/geS_QAlksdk?rel=0&amp;showinfo=0&amp;autoplay=1"
                                        className="video__media"
                                    ></iframe>
                                </div>
                                <div className="video video--enabled">
                                    <iframe
                                        src="https://www.youtube.com/embed/geS_QAlksdk?rel=0&amp;showinfo=0&amp;autoplay=1"
                                        className="video__media"
                                    ></iframe>
                                </div>
                            </div>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                Для вас мы представляем широкий выбор продуманных проектов домов из
                                бревна. В нашем арсенале имеются проекты рубленных домов от самых
                                компактных до настоящих боярских теремов. Вы точно сможете подобрать
                                интересное и подходящее для себя решение, как по удобству, так и по
                                бюджету. Все проекты разработаны с учетом многолетнего опыта
                                строительства и эксплуатации, размеры помещений выверены, а
                                планировки продуманны. Тем не менее, вы всегда можете привнести в
                                любой проект своё уникальное видение и мы с удовольствием внедрим
                                его для вас. Фундаменты для таких срубов стоит подбирать более
                                надежные: ленточный, плита, свайно-винтовой, классический свайный -
                                забивной. Стандартный столбчатый фундамент уже не подходит. В
                                каталоге указаны цены "под усадку" исходя из строительства дома
                                ручной рубки
                            </Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
