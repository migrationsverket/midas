import{r as m,f as l,j as t}from"./iframe-MifYwXyz.js";import{S as d}from"./SearchField-GAiS1ueE.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B_T8MOXY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ck9De9Y4.js";import"./utils-DQEE__1e.js";import"./useLocalizedStringFormatter-C3fn2FlC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DH66ZZE3.js";import"./useFocusRing-CshLtOVp.js";import"./index-C2YaqACl.js";import"./index-CDZjfK_p.js";import"./useFormValidation-Bv3qCLcs.js";import"./useField-DhyKPenV.js";import"./Button-CKNqLrwF.js";import"./Hidden-BW6dBRkK.js";import"./useLabels-C0p_nmcB.js";import"./useButton-Bi_I7gxU.js";import"./search-Bq6LiPaB.js";import"./createLucideIcon-Ci3Mi_gr.js";import"./ClearButton-Cr_cNS42.js";import"./Button-BcTOGRQL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GZgY9UBY.js";import"./VisuallyHidden-BKJVLMnZ.js";import"./x-D5mMwQqA.js";import"./FieldError-909Vsbkt.js";import"./Text-C2SPm1jh.js";import"./Text-Dt_sqIOk.js";import"./RSPContexts-_MaIYEvI.js";import"./Collection-B0YoD_N2.js";import"./index-CIvMG0Kq.js";import"./DragAndDrop-DqVobd_Z.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3-7GMyH8.js";import"./SelectionManager-Crflqmi0.js";import"./useEvent-Bzi6Lqj5.js";import"./useDescription-5ZHxX6H6.js";import"./inertValue-CkH0eEmP.js";import"./useHighlightSelectionDescription-AaS3Yt9d.js";import"./useUpdateEffect-DVcdbKwy.js";import"./ListKeyboardDelegate--XGA4FuR.js";import"./useHasTabbableChild-C_sf07De.js";import"./Checkbox-Dr7M6M1M.js";import"./Form-BHuHVE3q.js";import"./check-0fG5TODW.js";import"./useToggleState-D30KcIWP.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
