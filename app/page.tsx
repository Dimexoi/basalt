'use client'
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import Welcome from './components/Welcome'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <main className="h-full">
      <Welcome/>
      <div>
        <h2>Découvrez nos projets</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corrupti beatae, minima voluptas nemo optio, incidunt veniam inventore quos hic iure ratione? Temporibus animi ut provident esse, expedita deleniti ex, doloribus facilis ducimus dolorem magnam. Cum mollitia excepturi dolorum, alias eligendi, quia quaerat error autem est aperiam dolores et illo maxime facilis. Quae itaque incidunt molestiae voluptas fuga animi. Consectetur, praesentium! Ipsa illum eius expedita ex harum quidem aliquam a? Molestiae facere itaque voluptatem asperiores quidem aliquam repellendus doloremque laudantium quae inventore, quasi eaque, laborum excepturi ad, consectetur atque adipisci facilis eos voluptatibus alias eveniet sit nobis praesentium. Quia repudiandae reprehenderit, officiis amet magnam neque at nihil, ipsa iste necessitatibus, perferendis voluptas molestiae facere quidem. Fuga soluta, minima alias quo cum hic porro, odit iste corrupti dicta iusto! Vitae nobis, earum repellat autem assumenda omnis asperiores quasi et quae adipisci? Mollitia vel, modi vero omnis laboriosam eaque debitis error consequuntur ipsa inventore iusto tempora illo magni voluptatem explicabo ab? Temporibus hic quis nihil alias sunt consequatur animi deserunt doloribus, atque tempore quod laboriosam officiis ex iusto rem distinctio pariatur eaque ad numquam recusandae eos ratione quasi minima. Quos maxime asperiores alias aliquam doloremque eos a facilis aut, sed necessitatibus aperiam laborum, distinctio corrupti reiciendis aspernatur sequi cum praesentium nostrum quam, possimus totam nihil porro. Illo sint maxime harum, ducimus quas beatae, assumenda omnis, velit a excepturi explicabo reiciendis! Tempore distinctio dolores debitis, quasi ipsum ut, iste aspernatur voluptate expedita assumenda reiciendis, esse maxime recusandae officiis? Labore tenetur ratione quis, itaque saepe error cupiditate quisquam tempora provident consequatur repudiandae earum! Fugiat provident asperiores rem magnam, ducimus architecto ratione porro eum odio modi dolores, iste veritatis, id ad impedit voluptatibus? Ipsa, culpa? Porro nulla, nemo, quis minima odit maxime nesciunt facilis sapiente doloribus vitae illo quasi beatae ducimus aspernatur. Cupiditate tempore unde quod. Veniam, omnis. Rerum, beatae! Pariatur, reprehenderit minima. Architecto, provident veritatis. Autem, deserunt dolor quis dolorem, aliquid provident eos quibusdam cum voluptates sit numquam perspiciatis aut sequi ipsam ea repellat! Quasi debitis totam, iusto eum illo itaque ducimus voluptatum voluptas unde possimus harum officiis perspiciatis doloribus facilis eius dolore, architecto atque quod, tenetur odio quia quisquam est. Doloribus ratione architecto aliquam fugiat officia? Voluptatem quam dolorum nam voluptatum nulla nostrum, perferendis blanditiis! Nam sapiente earum voluptatibus ipsa fuga qui, vero magnam expedita veniam inventore eius placeat quasi illum facere iste distinctio. Vel adipisci nihil facere, molestiae, aliquid numquam commodi et rerum cum ipsa enim molestias, illum soluta dignissimos saepe expedita. Amet eum perspiciatis qui, quas fugit voluptatum consequuntur rerum perferendis ut. Ab obcaecati eius vitae quibusdam. Odio, blanditiis vel sunt voluptates eius, odit libero est natus maxime repudiandae expedita illo? Eos nisi consectetur vel repudiandae, natus ipsa? Modi optio aliquam molestiae ut aperiam exercitationem, debitis recusandae? Repellat, omnis a corrupti tempora dolorum porro placeat provident sequi praesentium deserunt, non fuga nemo deleniti hic consequuntur sapiente iusto nostrum nesciunt blanditiis vel, dolor perspiciatis repellendus sint. Aut consequuntur ipsa vel, rerum ut eos voluptatibus ullam laborum quae possimus culpa nesciunt, reprehenderit voluptates!</p>
      </div>
    </main>
  )
}
