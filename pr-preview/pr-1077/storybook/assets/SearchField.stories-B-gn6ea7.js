import{r as m,f as l,j as t}from"./iframe-B8csx-lQ.js";import{S as d}from"./SearchField-DwGT_-5e.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BoOf6c69.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DXIS0caZ.js";import"./utils-CaD1t0h3.js";import"./useLocalizedStringFormatter-D4J2Tzs0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-WkTKoR1k.js";import"./useFocusRing-CtLa9eaD.js";import"./index-CFvG_i59.js";import"./index-DswvhGAm.js";import"./useFormValidation-CRpLLkPo.js";import"./useField-DQ83cjwx.js";import"./Button-BMaw0M-e.js";import"./Hidden-rw470soy.js";import"./useLabels-BKsEn5mf.js";import"./useButton-BXjDl97D.js";import"./search-Cmy2y3wB.js";import"./createLucideIcon-HRlJw9Ov.js";import"./ClearButton-C9BFxdbF.js";import"./Button-CCTCnZfY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CJcJ86Ob.js";import"./VisuallyHidden-DLhvU9s0.js";import"./x-CSxMNTqR.js";import"./FieldError-qCPIdUr6.js";import"./Text-Nk_W5AjM.js";import"./Text-BdB7kbkm.js";import"./RSPContexts-D1g7Zz4R.js";import"./Collection-zter9-ZZ.js";import"./index-BNvBtkY9.js";import"./DragAndDrop-9vXMZq1a.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgvpTl4k.js";import"./SelectionManager-BRaVJSqk.js";import"./useEvent-BfC5JKdk.js";import"./useDescription-DSFLvKUh.js";import"./inertValue-DFohLV0f.js";import"./useHighlightSelectionDescription-BiPYXO_b.js";import"./useUpdateEffect-M5WtOyV_.js";import"./ListKeyboardDelegate-CKNg6H-q.js";import"./useHasTabbableChild-rsESeaFH.js";import"./Checkbox-CE8YBMZS.js";import"./Form-C6CeHvqz.js";import"./check-yzWMDONN.js";import"./useToggleState-Ds-aLMXH.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
