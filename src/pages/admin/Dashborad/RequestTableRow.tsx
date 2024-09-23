import APP_IMAGES from '@/constants/images'

const RequestTableRow = ({name, designation, amount}) => {
  return (
    <div className='flex justify-between py-2 border-b-[1px] items-center'>
        <div className='flex gap-2'>
            <img src={APP_IMAGES.MAN} className="rounded-full w-10 h-10" alt="" />
            <div>
                <h2 className='text-sm'>{name}</h2>
                <p className='text-gray-500 text-[14px]'>{designation}</p>
            </div>
        </div>
        <p className='text-primaryThemeColor text-sm'>
            {amount<0 ? '-$'+amount*-1 :'$'+amount}
        </p>
    </div>
  )
}

export default RequestTableRow