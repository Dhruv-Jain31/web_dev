
import { RecoilRoot,useRecoilValue,useRecoilState } from 'recoil'
import './App.css'
import { countAtom } from '../store/atoms/count'

export default function Context_Counter(){
    return (
      // component that are using atom logic, recoil logic etc must be wrapped in a RecoilRoot tag
        <div>
          <RecoilRoot>
            <Count />
          </RecoilRoot>
        </div>
    )
}

function Count() {
    console.log("count is re rendering")
    return <div>
        <CountRenderer />
        <Buttons />
    </div>
}

function CountRenderer() {

  const count = useRecoilValue(countAtom)
    return <div>
      <b>
        {count}
      </b>
    </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
    return <div>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
          setCount(count - 1)
        }}>Decrease</button>
    </div>
}