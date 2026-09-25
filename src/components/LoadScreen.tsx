type LoadScreenProps = {
  visible: boolean
}

export default function LoadScreen({ visible }: LoadScreenProps) {
  return (
    <div className={`load-screen ${visible ? "" : "load-screen-hide"}`} aria-hidden={!visible}>
      <div className="load-mark">
        <span className="load-spin" />
        <p className="text-center text-[15px] leading-[1.15] font-medium tracking-[-0.03em] text-[#111]">
          MDS
          <br />
          Bizintellis
        </p>
      </div>
    </div>
  )
}
