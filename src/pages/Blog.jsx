import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import Hongo from "../assets/image-foro/hongo.svg";

function Blog() {
	return (
		<div className="bg-(--back-ground-primary) text-white mx-auto max-w-7xl">
			<div className="p-4 ">
				<div className="max-w-full mx-auto mb-10">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Grande */}
						<div className="md:col-span-1 bg-slate-900 p-6 rounded-2xl">
							<div className="flex flex-col items-center gap-4">
								<img src={Hongo} alt="" />
								<p className="text-(--text-gray-claro) font-semibold">
									Hack the box rank
								</p>
								<h3 className="font-bold text-3xl">Noob</h3>
								<div className="">
									<div className="flex justify-between">
										<p>Content Ownership</p>
										<p className="text-(--text-gray-claro)">
											3.05%
										</p>
									</div>
									<div className="relative w-full h-2 bg-slate-800 rounded-full">
										<div
											className="absolute top-1/2 -translate-y-1/2 h-2 bg-(--green-htb) rounded-full"
											style={{ width: "3%" }}
										/>
										<div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-(--green-htb) rounded-full"></div>
									</div>
								</div>
							</div>
							<div className="mt-6 flex flex-col gap-4">
								<div className=" w-full bg-gray-400 p-6">
									<h4>#969</h4>
									<p>Global Ranking</p>
								</div>
								<div className=" w-full flex justify-between">
									<div className=" bg-gray-400 p-6">
										<h4>1</h4>
										<p>Points</p>
									</div>
									<div className=" bg-gray-400 p-6">
										<h4>6</h4>
										<p>Flags</p>
									</div>
									<div className=" bg-gray-400 p-6">
										<h4>--</h4>
										<p>Blods</p>
									</div>
								</div>
							</div>
						</div>
						<div className="md:col-span-2 bg-slate-800 p-6 rounded-2xl">
							Contenido grande
						</div>

						{/* Pequeño */}
					</div>
				</div>

				{posts.map((post) => (
					<div key={post.slug} className="mb-6 border-b pb-4">
						<h2 className="text-xl font-semibold">{post.title}</h2>
						<p className="text-sm opacity-70">{post.date}</p>
						<p className="mt-2">{post.excerpt}</p>

						{/* 👇 AQUÍ VA EL LINK */}
						<Link
							to={`/blog/${post.slug}`}
							className="text-green-400 mt-2 inline-block"
						>
							Leer más →
						</Link>
					</div>
				))}
			</div>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			Dignissimos reprehenderit at, illo obcaecati saepe excepturi ipsum
			minima inventore vero nemo aspernatur hic aliquid alias laborum
			animi asperiores, quam itaque architecto! Tempore magni est, fugiat
			animi cumque laudantium quas inventore excepturi dignissimos,
			reprehenderit odit consectetur soluta voluptates laboriosam. Totam
			sapiente porro deserunt quia maiores sit, temporibus quo corrupti
			amet magni consequuntur? Aliquid nobis consequuntur ducimus, ab
			nostrum aut magni asperiores voluptates commodi corrupti sed
			provident voluptate velit incidunt. Deleniti vero quas ut facilis
			aperiam? Unde, sint mollitia amet accusantium laboriosam nam?
			Excepturi non error, deserunt et velit vero necessitatibus dolorum!
			Similique recusandae ab nihil expedita veniam ipsa, iure cupiditate
			molestiae, voluptatibus quis eaque dignissimos quibusdam, optio quod
			maxime esse quo sunt. Vel exercitationem repellendus ad quisquam,
			hic quibusdam unde in similique quae, atque corporis voluptatibus
			voluptates assumenda fuga sunt illo excepturi, explicabo est
			provident a. Vel quibusdam debitis blanditiis similique eaque.
			Magnam illum ea eaque odit iste at nam officia accusantium ducimus
			ut, minima dolorem mollitia distinctio, atque non minus quo eum
			quidem aspernatur a assumenda. Ea quae temporibus quibusdam
			accusantium. Modi, obcaecati qui. Saepe obcaecati quos voluptatum.
			Labore molestias corporis asperiores maiores maxime perferendis
			voluptatem. Fuga consectetur facere vero voluptate, culpa possimus,
			sunt voluptatem, tempora quaerat debitis aliquam dolorem sit.
			Perferendis facere quo perspiciatis quam, explicabo atque ut
			laudantium magni est voluptatum numquam cumque vero odio dignissimos
			dolore quasi officiis praesentium modi quae totam distinctio
			facilis! Fugiat neque molestias ipsum. Exercitationem vel placeat
			incidunt rerum temporibus laborum voluptatem ea necessitatibus iusto
			maxime, in eligendi sapiente esse. Optio voluptatem culpa maiores
			repellat exercitationem eveniet, omnis magnam quam assumenda fugiat
			aliquam modi. Dolorum voluptatibus assumenda nulla! Possimus
			assumenda ab obcaecati nisi porro deserunt harum hic veniam
			repellat, modi ullam eveniet facilis soluta consequatur? Laboriosam
			cupiditate non magnam obcaecati quibusdam. Quisquam, distinctio sed?
			Vero quasi accusantium laborum quos voluptas nemo provident, cumque
			dolorem voluptate possimus nobis, exercitationem tempore suscipit
			incidunt quae ipsum repellat! Aut consequatur iste dolore quisquam
			earum perferendis nihil molestias soluta. Quas fugiat laborum
			reprehenderit, error perferendis eaque animi? Vitae quis tempore
			dicta repudiandae maxime amet quam beatae in dolore. Aliquid veniam,
			nostrum repellat voluptas quia corporis laboriosam aperiam? Maiores,
			recusandae? Dolorum debitis quibusdam cumque ex harum delectus
			doloremque, reiciendis, voluptate tempora quia exercitationem, at
			vitae dolore! Hic ad dicta odio autem iusto porro mollitia dolore
			minus doloremque in, adipisci animi. Optio numquam eligendi cum
			sequi quidem quis? In consectetur ducimus, laudantium soluta,
			placeat ut distinctio labore quibusdam, asperiores incidunt natus
			vel nam. Voluptatum iste commodi adipisci culpa aperiam eligendi
			cum. A quae odio ratione? Amet expedita id provident, numquam magnam
			necessitatibus corrupti dolores unde ad maiores iure eligendi ipsum
			quo voluptatem in autem similique veniam, cum delectus impedit quos!
			Placeat! Quibusdam delectus dolores ducimus ad, dolorem sunt
			doloribus sed magni numquam omnis animi voluptates sequi repellat
			corrupti, voluptatem quis praesentium sapiente similique quod rem
			officia illum ex ipsam. Repellendus, consequuntur. Libero dicta ex
			voluptate. Ipsam animi eveniet, delectus, iure pariatur ab nesciunt
			dolores minus quam sit eius. Asperiores placeat deserunt officiis
			veritatis, sed praesentium assumenda, nulla, inventore ut aliquid
			perferendis. Omnis, minima reiciendis! At fugit quia totam amet
			tenetur deserunt laudantium provident eveniet sequi quos molestiae
			perspiciatis corrupti, ut quis pariatur excepturi inventore? Nihil
			odit recusandae officiis placeat unde labore. Consectetur voluptatem
			excepturi ex rem? Eius sapiente voluptatibus in suscipit neque,
			consectetur eaque sit adipisci, ipsam, alias dolore tempora soluta
			unde est expedita asperiores? Non ab nulla tempora enim illo! Minus
			totam ea sunt fugit? Ullam, explicabo ipsa aliquid blanditiis
			molestias unde suscipit! Porro ad assumenda sapiente, reprehenderit
			magni et eos beatae officia molestiae animi iste nesciunt provident
			ipsa. Iusto? Consectetur fugit accusamus architecto id adipisci,
			doloribus voluptates nulla, porro dicta optio ducimus error rerum.
			Nemo nesciunt maiores ducimus quasi, esse aliquam asperiores aut
			magni atque quos quae dolor cupiditate. Eos corporis temporibus
			nulla quidem aliquid impedit esse dolor voluptatibus ad! Qui
			veritatis ut, odit alias provident, placeat doloribus id temporibus
			debitis iure, itaque dicta facere harum velit rem voluptas. Autem
			reprehenderit minus ab, magnam aperiam doloribus delectus placeat
			soluta esse quisquam dicta nostrum quos nisi, architecto nihil
			maiores pariatur. Magnam ipsam facilis ducimus commodi, optio nemo
			minus unde enim? Aliquid aperiam, nemo animi alias est possimus
			itaque ratione nulla cupiditate voluptas, unde quidem magni. Maiores
			libero non possimus molestias quo fugit nulla, numquam sequi atque,
			animi excepturi provident minima! Cupiditate accusamus quidem,
			ratione veritatis nam accusantium quasi blanditiis consequuntur
			nihil non. Id reprehenderit quod molestias voluptatum harum
			consectetur modi! Illo minima dolore ratione ut dicta quia illum
			nostrum porro. Dolorem expedita ea quaerat omnis, quas, ullam
			maiores, ipsum ipsam fuga consequuntur laudantium! Odio ex a
			deleniti praesentium quas natus, harum iste quos nisi velit
			molestiae adipisci, quibusdam vitae saepe. Accusamus quos itaque
			distinctio aliquam et, earum consequatur soluta ad? Officia
			asperiores, possimus necessitatibus cumque modi vitae non autem
			adipisci ipsam aperiam voluptatum nulla, quas tempore dolorum,
			labore obcaecati veniam. Eligendi voluptatibus et molestias! Iste
			quibusdam repudiandae libero corrupti, sed magni omnis doloribus
			temporibus provident, vero expedita quo quasi tempora exercitationem
			esse mollitia ipsum iusto. Incidunt iusto odit tempora deserunt?
			Esse asperiores maxime laborum accusamus amet, quasi ea quaerat!
			Accusamus repudiandae alias perspiciatis ea, ipsum hic veritatis
			ducimus fugiat veniam corrupti quae similique molestiae quibusdam
			possimus natus impedit quisquam accusantium! Maiores mollitia, modi
			officia rem cum molestiae quasi vero accusamus aperiam voluptate
			blanditiis hic. Culpa fuga sit quod illo quidem voluptas? Dolor,
			eaque accusantium vitae beatae obcaecati optio culpa itaque! Ipsum
			ut voluptatem enim modi fugit inventore voluptatibus eligendi eum
			quis expedita odio, at sint tempora, sunt aspernatur in similique
			eaque ad quaerat dignissimos ducimus ex. Officia accusamus illum
			modi. Voluptate nostrum porro labore voluptatem dolore nihil ab
			culpa, ea expedita dolor beatae repellat magni, corrupti excepturi
			possimus voluptas eum aspernatur reprehenderit, iusto quae deserunt
			dolorum minima reiciendis? Natus, corporis. Dolores quibusdam unde
			commodi eaque reiciendis sed rerum voluptatibus sunt ex laudantium
			totam, repellat culpa similique amet assumenda id quam tempore
			corrupti possimus, vel eveniet! Ex magni nobis impedit at?
			Temporibus minus architecto maiores, accusamus totam provident sunt
			vitae suscipit laboriosam repellat non maxime deserunt! Quo maxime,
			labore eligendi corrupti culpa esse? Ullam ipsam voluptas ipsum
			expedita ea accusamus sed. Consectetur quidem unde eligendi
			voluptatem, enim possimus maiores ratione totam necessitatibus,
			libero sequi vel sed laborum. Possimus odit vero harum placeat eaque
			pariatur amet adipisci animi, nostrum optio quidem dolorem? Vitae
			consequatur ratione fuga omnis quis, voluptates ab odio veritatis
			error temporibus ea neque beatae natus, asperiores quae, id
			recusandae quibusdam mollitia sed blanditiis architecto accusamus
			provident? Vero, velit quod! Ad amet voluptatem temporibus
			exercitationem veritatis quia est modi tempora. Nulla, neque
			voluptatem mollitia odit delectus quis omnis sed dolores recusandae
			quo, modi quas quos tempore dolorum assumenda, nostrum officiis? Ad
			minus sint deserunt officiis totam hic quisquam, reprehenderit
			laudantium fuga et unde est esse earum ratione molestiae neque id
			aliquid temporibus quas, praesentium commodi labore ipsam
			repellendus. Soluta, quis. Hic iusto porro accusantium animi
			deserunt incidunt, aliquid enim. Doloremque, odit expedita qui
			excepturi hic, illum voluptatibus quidem unde eos non, error
			asperiores velit dolores deleniti aut nobis. Excepturi, accusamus!
			Error vitae mollitia temporibus expedita. Debitis omnis quae
			architecto illo enim molestias iusto sit fugit laborum facilis! Odit
			molestias harum, eum sint repellendus esse labore debitis iusto
			magni facilis! Repellat? Ducimus ullam non laboriosam architecto
			iusto perferendis quo! Libero laborum vero nostrum magnam a porro
			nobis in, soluta possimus? Dignissimos autem ipsa eveniet saepe
			labore tempore quas eligendi, veritatis deserunt? Quisquam inventore
			veritatis necessitatibus cum consectetur iure quos repellendus amet
			repellat tempora, facilis quod, veniam qui quam vitae eos at iusto
			tenetur debitis vel, aperiam nostrum. Fuga enim nobis eos! Pariatur
			repellendus quisquam, vel doloribus dolores accusamus laborum illo
			sunt, est blanditiis obcaecati harum ducimus tempora aut at nesciunt
			sint vitae fugit esse exercitationem quam sapiente eum? Quae, esse
			iste. Voluptatem quam sint alias assumenda quos itaque vitae aut
			unde expedita. Veniam obcaecati rerum pariatur at reiciendis illum
			doloremque corporis nesciunt omnis, voluptatum fugit unde rem
			deserunt consectetur accusamus nihil? Illum doloremque ipsa
			repellat? Nemo, rem magni quae obcaecati dolor mollitia minima ab
			aliquam odio quis quam, molestias nulla provident voluptatibus porro
			consectetur aliquid pariatur neque repellat harum a. Ut. Rerum quam,
			quas inventore deleniti ratione atque accusamus soluta praesentium
			repellat dolor nostrum unde ducimus quaerat voluptates debitis,
			necessitatibus ab exercitationem sapiente, amet saepe modi velit
			laboriosam quae est. Dolore. Impedit nihil mollitia maiores, aliquid
			culpa vitae atque neque consectetur tempora repudiandae delectus,
			similique asperiores aspernatur numquam fugit id iste quidem cum
			natus architecto. Eaque accusamus nihil praesentium exercitationem
			facilis? Sunt adipisci iure esse eius dolorum temporibus ad ut
			veritatis ab possimus ea fuga, cum autem soluta laudantium deserunt
			delectus tempora, quibusdam recusandae. Laudantium tenetur
			exercitationem magnam odit, est sunt. Aperiam sequi praesentium, eos
			laboriosam at delectus porro voluptatem magni. Temporibus in fugiat
			dignissimos. Facere ipsum suscipit, exercitationem qui aspernatur
			repellat mollitia rerum eum deserunt, voluptatum amet voluptas
			explicabo illum? Explicabo a delectus velit laborum aliquid
			pariatur. Incidunt, cum. Sint atque quisquam saepe eum repudiandae
			est odit iusto blanditiis fugiat accusantium aperiam, dignissimos
			cupiditate distinctio. Aliquam corporis voluptas veniam et!
			Reprehenderit incidunt, quia in veritatis officiis odit magni quidem
			aspernatur, eum laudantium et qui fugiat repellat explicabo unde
			soluta! Dolorum vel fugit libero in. Vero sint hic deserunt quaerat
			quo. Tempora iusto, expedita itaque perferendis vel optio alias
			velit labore adipisci? Aspernatur, sequi doloribus reiciendis at
			velit perspiciatis cumque accusamus error autem magnam illum
			molestias. Beatae sapiente id soluta ducimus. Delectus id ea quasi,
			beatae molestiae ab recusandae natus nostrum excepturi dolorum
			possimus ullam. Earum molestias laboriosam sint hic obcaecati
			suscipit voluptas magnam deserunt eos exercitationem explicabo, ad
			expedita nesciunt. Modi saepe magni sapiente earum sit atque totam
			rerum facere ratione aperiam, repellendus molestiae accusamus dolore
			inventore dignissimos praesentium deserunt blanditiis nobis quisquam
			porro doloremque magnam! Quidem eligendi pariatur consequuntur.
			Eaque, cum neque. Dicta quisquam minus quos in voluptatem aperiam
			autem, iste hic facilis voluptate voluptatibus illum qui ipsam
			doloremque soluta ex, a ratione eligendi delectus culpa sequi quo
			porro! Sequi reiciendis quia iusto expedita nostrum, esse ratione
			perferendis minima optio quod eaque aperiam quibusdam, veritatis
			blanditiis sint inventore voluptatum. Debitis, eum ullam recusandae
			iure sunt suscipit. Assumenda, nostrum libero. Aliquam alias
			mollitia ratione natus maxime omnis labore necessitatibus, quibusdam
			laborum, nisi quas modi. Assumenda iste natus, ullam cum sunt vitae
			repellendus eaque exercitationem ipsum placeat, sint neque
			voluptatem. Delectus. Adipisci ab non fugiat voluptates ea mollitia
			nam sunt reiciendis sint aspernatur, incidunt omnis totam quod unde
			voluptatibus consectetur provident ex deserunt amet! Voluptatibus
			necessitatibus ut cupiditate qui? Tempora, hic. Optio repellat magni
			vitae pariatur accusantium veniam cum dolor! Officiis, ipsa.
			Delectus ut cupiditate accusamus, placeat itaque magnam molestias
			laudantium officia illo pariatur enim sint autem nulla neque ducimus
			dolore! Recusandae enim obcaecati temporibus adipisci? Animi placeat
			adipisci voluptates ipsa nostrum incidunt nobis quas distinctio.
			Omnis ab dolor incidunt deserunt dolorum maxime voluptates.
			Consectetur velit in earum facere a optio. Deserunt, molestiae ut
			doloribus, perferendis aliquid, vero illo quisquam porro eligendi id
			consequuntur? A, non minus. Cupiditate, architecto sapiente, porro
			neque doloribus nulla vero illo autem labore aut temporibus ipsam.
			Blanditiis harum magni iure! Nulla impedit cum accusamus, expedita
			blanditiis voluptas minus doloremque ipsam ab repellat illum nobis
			aspernatur fugiat quas laudantium illo qui dolorum beatae aliquid
			tenetur repellendus dolores! Placeat deleniti eos blanditiis enim
			quis, amet fugit magni accusantium! Eligendi dignissimos deserunt
			porro. Praesentium alias quis quos porro placeat blanditiis aliquam
			repellendus a facere, cum assumenda mollitia magni itaque! Ipsam
			nulla maxime quo? Quidem aperiam temporibus, voluptatem sunt
			corrupti alias voluptate recusandae voluptatum accusantium. Adipisci
			modi iusto exercitationem harum, necessitatibus minus dolor
			repudiandae nostrum esse nemo dignissimos, fuga aperiam. Illo, ex
			qui et vitae necessitatibus exercitationem numquam quibusdam eius
			obcaecati aut esse, inventore officiis beatae harum. Nisi, molestias
			quam? Voluptate quasi dignissimos repellendus sequi molestias, culpa
			ex accusantium distinctio. Eligendi repellendus suscipit voluptate
			inventore maiores eius, maxime, dolores a mollitia odit vitae atque
			voluptates modi? Voluptatem inventore totam, tenetur praesentium
			modi delectus libero! Veniam impedit reprehenderit soluta numquam
			rerum! Natus est ad neque iusto assumenda, ut totam at saepe
			molestias tenetur excepturi hic molestiae non laboriosam ea ipsum
			voluptatum quidem facere, accusamus architecto quis expedita
			officia. At, eveniet vero. Quam quasi eum omnis quis reprehenderit
			voluptates tempora fugiat nihil similique, iusto nisi repudiandae
			vitae saepe? Sed ea qui voluptatum, voluptate ducimus nulla unde
			aspernatur quae, dolorem dolores aliquid assumenda! Obcaecati
			distinctio optio quidem, quae non perspiciatis accusantium ipsum
			quasi ut, dolore dicta laborum sequi quam laboriosam incidunt
			repudiandae dolorum? Assumenda adipisci at distinctio aut, dolor
			quaerat quia iure laborum. Magnam, vitae numquam quos repellendus
			omnis dolore ipsum est. Assumenda, minima perferendis sunt maiores
			eos eligendi quia nulla itaque sit dolore blanditiis aut ipsa
			laborum nobis officiis molestiae deserunt consequuntur. Quos labore
			facilis, totam doloribus velit voluptates vero modi. Consectetur
			laudantium ab doloremque soluta necessitatibus culpa quaerat,
			sapiente blanditiis dicta non molestiae eaque et quasi sunt eligendi
			aliquid esse! Architecto? Repellendus unde nemo accusamus possimus
			in necessitatibus soluta ab perspiciatis. Libero itaque ipsum
			provident veniam quaerat quasi blanditiis, dolorem saepe nihil
			incidunt cupiditate quam sunt ab ducimus harum culpa? Ducimus.
			Voluptate doloremque nihil maiores possimus enim pariatur nobis
			expedita aperiam tempore ratione sed tenetur cumque vitae, explicabo
			nam illo laboriosam eos adipisci! Maxime id tempora amet alias
			reiciendis deleniti cum. Beatae voluptates est blanditiis voluptatem
			excepturi ea nemo reiciendis quibusdam veniam veritatis! Unde
			eveniet ullam ipsam quae dicta, cum inventore cumque animi minima
			rerum praesentium, quis neque nisi facilis laboriosam? Ea, possimus?
			Illum, distinctio tenetur. Quisquam voluptatibus numquam dignissimos
			quia sapiente iusto vel quam, fuga eius culpa voluptates neque
			molestias ipsam porro quasi quas deserunt earum saepe, obcaecati
			ullam quod. Saepe nulla corporis deserunt culpa aliquid excepturi,
			ipsam, at magnam autem distinctio repudiandae illo error, eveniet
			quasi laudantium facilis officia hic sequi molestias eius alias
			earum? Non similique minus esse? Neque sequi molestiae delectus
			perspiciatis veritatis quia unde minus qui. Reiciendis nesciunt
			distinctio nostrum quisquam odit quam nihil ratione laborum, modi,
			blanditiis non quos voluptatem officiis maiores? Repudiandae, iste.
			Quos! Dolor cupiditate minima quod est doloremque. Corporis
			distinctio reprehenderit, dolores sequi accusantium nesciunt magni!
			Sequi consequatur consequuntur error veritatis consectetur magnam?
			Numquam molestiae dolor debitis. Accusantium, at obcaecati. Maxime,
			ut! Molestias laborum ex dolorum ipsum hic, vel obcaecati, labore
			omnis distinctio, doloribus eligendi accusamus eos sapiente expedita
			magnam sint. Voluptas ducimus iusto necessitatibus magni minima quam
			totam ipsum incidunt quas? Accusantium ad tempore blanditiis
			tempora. Cumque sit enim vel beatae nulla consectetur accusantium,
			quas eum fugit, rem alias quia quo culpa! Fugiat tempora recusandae
			doloremque natus illo mollitia nesciunt odio. Dolore non
			consequuntur magni minus! Eos, blanditiis dicta quibusdam voluptatum
			ratione soluta esse explicabo sequi. Doloremque similique cupiditate
			accusamus excepturi laudantium fugiat numquam exercitationem minus
			quod, sapiente commodi vitae quia. Natus ipsum quaerat sint at
			facilis dolor possimus. Quod unde id, dolor veniam, quisquam nemo
			explicabo ducimus repudiandae odit soluta eveniet tempora animi
			nulla. Possimus impedit quas consequuntur saepe sapiente. Quidem
			dolor accusamus ad debitis nihil perferendis natus, animi quam
			similique, repellendus saepe illum architecto laboriosam voluptatum
			in esse nemo eaque libero cum maxime. Fuga soluta modi omnis neque
			reprehenderit? Provident possimus amet officiis soluta nobis
			necessitatibus fuga quisquam maiores error magnam voluptate impedit
			dignissimos mollitia eum, earum architecto nesciunt. Ducimus ex
			ratione sint itaque officiis vel, quod expedita. Numquam? Amet quia,
			ut veritatis consequatur mollitia tenetur ipsam vitae ullam suscipit
			reprehenderit unde iure distinctio commodi non recusandae architecto
			sapiente repellat, saepe itaque illum? Mollitia sit velit qui
			aspernatur excepturi. Magnam quas modi amet dolorum, a eaque id
			laudantium officiis vitae veritatis aliquid repellat et cum quasi
			porro deleniti fuga voluptatum quis quam doloremque officia quos
			provident? Quasi, vitae ducimus! Numquam ratione adipisci ab
			possimus. Eum nostrum, aperiam consequuntur quia quam quaerat quod
			eaque et necessitatibus, tempora id voluptatibus quis? Totam
			perspiciatis nesciunt consequatur magnam voluptatibus illo dolores
			distinctio facilis? Quibusdam, ea pariatur reprehenderit ducimus
			aliquam quia totam quas harum, distinctio quisquam necessitatibus
			iste consequatur esse blanditiis soluta molestiae eum sapiente
			praesentium, debitis fugiat nam repellendus facilis cum. Quia, eos.
			Tempora atque recusandae velit voluptatum placeat nihil asperiores
			iusto laudantium quia totam natus rerum accusantium animi laborum,
			assumenda ipsa nobis ipsum eius accusamus magni quibusdam. Labore
			reiciendis vero itaque mollitia. In, vero vitae dolorum cumque
			laboriosam possimus hic nobis rerum nesciunt ab pariatur animi dolor
			provident ducimus. Quos assumenda numquam ut minus atque, animi
			eveniet in? Nihil repellendus nostrum mollitia? Laboriosam, delectus
			enim quia perspiciatis temporibus, blanditiis quam nam totam qui
			beatae deserunt provident facere, dolorem atque repellendus esse
			odio quis in. Laudantium nam, natus ab error veniam minus
			reprehenderit? Neque sunt assumenda suscipit pariatur iusto
			mollitia, repudiandae quas quam minus corrupti consectetur totam
			explicabo cumque nihil eveniet odio nisi asperiores deserunt est at
			saepe tempora ullam. Eaque, id optio! Deleniti, laboriosam placeat
			animi sint consequatur autem repellat magni exercitationem sed quasi
			aliquam molestiae assumenda quam repudiandae? Porro, sapiente hic?
			Aut consequuntur magnam incidunt pariatur esse cumque debitis ab ex?
			Tempora autem doloribus blanditiis aut placeat dignissimos quas
			sapiente, modi fugiat dolorum aspernatur? Ea similique cumque,
			tempora nesciunt repudiandae veniam rem sit iste, delectus ipsa
			laborum consequatur nisi iure? Repellat? Ratione saepe veniam
			dolorem beatae totam reprehenderit ipsa sed dignissimos placeat
			minima eius quibusdam expedita, molestias labore minus at distinctio
			debitis magni ad id optio eligendi consectetur. Odit, doloremque
			blanditiis. Quis provident voluptas incidunt accusamus inventore
			dolores deserunt aut qui voluptatibus quos, dicta nesciunt sequi
			aspernatur itaque possimus quaerat eaque tempore iste! Alias, esse.
			Nulla similique temporibus obcaecati maxime recusandae! Alias
			eveniet architecto nostrum, tempore neque sint ex sapiente error
			illo qui incidunt. Repellat facere quos vel, adipisci voluptates
			voluptatum eos soluta sint harum enim inventore blanditiis?
			Accusamus, ex? Suscipit! Vel voluptatem nobis rerum reprehenderit
			dolore, dolor optio culpa. Iusto dolores quaerat et a voluptatum
			animi alias necessitatibus tempora! Labore corrupti modi accusantium
			ex, velit delectus ea repudiandae qui blanditiis. Dolorem, ipsum?
			Nam fugit obcaecati qui repellat quisquam magnam corrupti
			perferendis blanditiis libero. Aspernatur laudantium consequatur
			esse! Iure ullam repudiandae officia expedita? Voluptates veniam
			voluptatibus et impedit, ea assumenda ut! Laudantium aspernatur unde
			cupiditate vel consectetur, quasi nulla inventore sunt. Quasi
			adipisci enim, illum dolorem delectus iure suscipit, doloribus
			minima soluta officiis molestias, magnam iusto explicabo pariatur?
			Cupiditate, itaque ea?
		</div>
	);
}

export default Blog;
