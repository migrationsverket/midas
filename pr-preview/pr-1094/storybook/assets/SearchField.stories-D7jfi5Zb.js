import{r as m,f as l,j as t}from"./iframe-C2hHAX_c.js";import{S as d}from"./SearchField-D-VaD63J.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bv7LiYAL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bqiy5-s7.js";import"./utils-CYjcBBm1.js";import"./useLocalizedStringFormatter-Cusafc4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVr0BcQN.js";import"./useFocusRing-71g5CJVP.js";import"./index-utew35I4.js";import"./index-BISH_zx5.js";import"./useFormValidation-DHc1AjUb.js";import"./useField-CMmSOBcA.js";import"./Button-D8SyKFCR.js";import"./Hidden-UkteWA62.js";import"./useLabels-CS2Af-Ri.js";import"./useButton-De47wRHH.js";import"./search-eBPtkLyb.js";import"./createLucideIcon-BcvDIfsv.js";import"./ClearButton-C7GnG285.js";import"./Button-DlfSSXdG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQOzlYhQ.js";import"./VisuallyHidden-DWzqY3m_.js";import"./x-C0uuZGTx.js";import"./FieldError-D33fSaC5.js";import"./Text-CEBbuk7S.js";import"./Text-CXKXGfTm.js";import"./RSPContexts-PGRfE4kt.js";import"./Collection-Dg-AlUMT.js";import"./index-XNBPZcEf.js";import"./DragAndDrop-CxUpEu7J.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C24OmCek.js";import"./SelectionManager-k5gNZb-Z.js";import"./useEvent-T4VjhQCT.js";import"./useDescription-BiuYFYuv.js";import"./inertValue-DpwH-Gk0.js";import"./useHighlightSelectionDescription-C4MTqWzN.js";import"./useUpdateEffect-DelP0G60.js";import"./ListKeyboardDelegate-WnG7Jb66.js";import"./useHasTabbableChild-Da3HWmEH.js";import"./Checkbox-Da4WQN-2.js";import"./Form-BmO7u4eV.js";import"./check-BulYR5eh.js";import"./useToggleState-CLGzywEw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
