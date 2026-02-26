import{r as m,f as l,j as t}from"./iframe-ByuAakOV.js";import{S as d}from"./SearchField-CyE8A8iR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CO1LZK--.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DR_wIXu3.js";import"./utils-DCDz8-p-.js";import"./useLocalizedStringFormatter-BdQ9RizH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEQ0TCEN.js";import"./useFocusRing-DeCr3XEL.js";import"./index-BFgkI4lh.js";import"./index-BxJqq9XP.js";import"./useFormValidation-CAmb2oIx.js";import"./useField-Ds2pdaH6.js";import"./Button-DvbXCpzv.js";import"./Hidden-C7SU6pSU.js";import"./useLabels-T0jO5CxA.js";import"./useButton-B3mMDgAO.js";import"./search-2ZZyliGq.js";import"./createLucideIcon-D1D3L2Mc.js";import"./ClearButton-C4NNUgDP.js";import"./Button-BMoNBLUG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BIIuRCVh.js";import"./VisuallyHidden-DZTJ2PK7.js";import"./x-OKF1Kye1.js";import"./FieldError-DONXBIHr.js";import"./Text-5L-Loq_n.js";import"./Text-DGHuFiVK.js";import"./RSPContexts-1jdWfN7k.js";import"./Collection-DmQ61gQy.js";import"./index-DAksP4v9.js";import"./DragAndDrop-Cp80eL2z.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CnN3WJdS.js";import"./SelectionManager-AXoRuYDA.js";import"./useEvent-Bw7OTlan.js";import"./useDescription-DRnY-b0G.js";import"./inertValue-B_vlJrGX.js";import"./useHighlightSelectionDescription-B8CIXYdO.js";import"./useUpdateEffect-9JqKYBfg.js";import"./ListKeyboardDelegate-kdv9SUeX.js";import"./useHasTabbableChild-DTotXsCH.js";import"./Checkbox-0eeVNHiS.js";import"./Form-CHtQa1xb.js";import"./check-CeOFa7Oh.js";import"./useToggleState-Bzx6OjVr.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
