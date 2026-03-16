import{r as m,f as l,j as t}from"./iframe-Bs8KTy6C.js";import{S as d}from"./SearchField-CmMyRuT6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dc_fV1yO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-6XUuECgK.js";import"./utils-7Wht2g-Y.js";import"./useLocalizedStringFormatter-BppNrsBp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DrruEHXD.js";import"./useFocusRing-Bd7pCjc-.js";import"./index-BLVDJhlR.js";import"./index-Bwa-TvpD.js";import"./useFormValidation-knURiIi0.js";import"./useField-Ccklh0cv.js";import"./Button-CxAHhwgQ.js";import"./Hidden-BrvGFfZa.js";import"./useLabels-BzecgFkb.js";import"./useButton-31Glm75G.js";import"./search-BU4QLrgm.js";import"./createLucideIcon-TcTXJfKq.js";import"./ClearButton-CWo1ZXdF.js";import"./x-DmyzL7jy.js";import"./Button-hEmbppXg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CT_aTZ4z.js";import"./VisuallyHidden-BBTIfzW0.js";import"./FieldError-C99gwkco.js";import"./Text-Is5sK9kM.js";import"./Text-BoHNsdRj.js";import"./RSPContexts-Cn0wIx3g.js";import"./Collection--YMenRmj.js";import"./index-D9oWzMTR.js";import"./DragAndDrop-BtMKC_MV.js";import"./getScrollParent-CPUsdWMS.js";import"./scrollIntoView-BBlkQq5K.js";import"./SelectionIndicator-Cxkz7MSn.js";import"./SelectionManager-BpOfB2LQ.js";import"./useEvent-5ZwgKb7q.js";import"./useDescription-B2R3OifQ.js";import"./inertValue-kh_5pWvL.js";import"./useHighlightSelectionDescription-C7A0sWDz.js";import"./useUpdateEffect-CqkCkNkC.js";import"./ListKeyboardDelegate-BVzuzsm6.js";import"./useHasTabbableChild-CJPHdFI5.js";import"./Checkbox-8aUQszfa.js";import"./Form-KKn6Lh2V.js";import"./check-DsGwW2u8.js";import"./useToggleState-SEglJwmJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
