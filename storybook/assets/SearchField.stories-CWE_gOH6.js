import{r as m,f as l,j as t}from"./iframe-CqGw52kl.js";import{S as d}from"./SearchField-s6aosbsQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-VEdhGEkG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CGYQyUPv.js";import"./utils-DNYE9rrP.js";import"./useLocalizedStringFormatter-Dya7MH1I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-0aYGewaS.js";import"./useFocusRing-GvsYGsAP.js";import"./index-CNbPhO7N.js";import"./index-Czi_6eNz.js";import"./useFormValidation-UdokVwww.js";import"./useField-DmoBeN0F.js";import"./Button-BG-x6i-t.js";import"./Hidden-duzZCIPn.js";import"./useLabels-BUufR3Kd.js";import"./useButton-CXcA0iHt.js";import"./search-Ci8MJwa7.js";import"./createLucideIcon-CoMafoM3.js";import"./ClearButton-Bw96DpIB.js";import"./Button-ABAzSfOF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-MNNjNWeI.js";import"./VisuallyHidden-BSHZJK5y.js";import"./x-DtV2puKB.js";import"./FieldError-CjHIzoMC.js";import"./Text-CHXVqnQT.js";import"./Text-D3EOjJ0B.js";import"./RSPContexts-CivMWx79.js";import"./Collection-D3dy6mEh.js";import"./index-DTn8N8sc.js";import"./DragAndDrop-Cbl-c5kO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D3fnkg3j.js";import"./SelectionManager-Cw5-ky3E.js";import"./useEvent-7xwxZlQ2.js";import"./useDescription-B6vY1f8v.js";import"./inertValue-_9DoBh9I.js";import"./useHighlightSelectionDescription-DuagSZh7.js";import"./useUpdateEffect-CGhPL4qY.js";import"./ListKeyboardDelegate-y9oHfD-i.js";import"./useHasTabbableChild-0xHoxTmJ.js";import"./Checkbox-BrrTN9w1.js";import"./Form-pNh1499V.js";import"./check-Bsa2uA7D.js";import"./useToggleState-DoxRLc9r.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
