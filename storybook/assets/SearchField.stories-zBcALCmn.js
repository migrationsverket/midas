import{r as m,f as l,j as t}from"./iframe-DEr5LyL9.js";import{S as d}from"./SearchField-BcCmyVuS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DINancHs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-h_6fbbYP.js";import"./utils-DwL8W83g.js";import"./useLocalizedStringFormatter-7tBmCqt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BSmJX6AI.js";import"./useFocusRing-DOTEBX87.js";import"./index-DExjCakj.js";import"./index-Nw0I9830.js";import"./useFormValidation-DZc-MdDk.js";import"./useField-DCYWYdaM.js";import"./Button-CBWCdlEK.js";import"./Hidden-NLnfrHdz.js";import"./useLabels-h5iBdAs1.js";import"./useButton-CVEcfEQG.js";import"./search-DR7ktsPw.js";import"./createLucideIcon-C7-8qsjG.js";import"./ClearButton-CL4v-WIp.js";import"./Button-BTVP098H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-55D9ueFU.js";import"./VisuallyHidden-CwaOa1m7.js";import"./x-HYwHFMJh.js";import"./FieldError-BdNVYVS1.js";import"./Text-DAPFiM_T.js";import"./Text-BfZUAwgB.js";import"./RSPContexts-Bn2caes7.js";import"./Collection-wSsMWtTf.js";import"./index-WpBjSl2g.js";import"./DragAndDrop-rFn4nG4e.js";import"./getScrollParent-Cud-L_Kq.js";import"./scrollIntoView-CKlviFsz.js";import"./SelectionIndicator-DbLggP3S.js";import"./SelectionManager-DLCRf5Wk.js";import"./useEvent-AcHiQLhX.js";import"./useDescription-DigpKdML.js";import"./inertValue-Bv_3bItu.js";import"./useHighlightSelectionDescription-D5EWLA4B.js";import"./useUpdateEffect-t9NCR68n.js";import"./ListKeyboardDelegate-WHrWx2cP.js";import"./useHasTabbableChild-BDMbvehl.js";import"./Checkbox-2RgZuw8d.js";import"./Form-BlMDnRx9.js";import"./check-B_4LPuF8.js";import"./useToggleState-CvAeBqbG.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
