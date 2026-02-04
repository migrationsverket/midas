import{r as m,f as l,j as t}from"./iframe-Bghha776.js";import{S as d}from"./SearchField-Bl5ULyZ1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BWR0gClM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-brBh_6bZ.js";import"./utils-CKwB2h75.js";import"./useLocalizedStringFormatter-BJIXw8SS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6PGVa32G.js";import"./useFocusRing-dHOAdoS9.js";import"./index-Ct8cyA18.js";import"./index-B_EeXN7u.js";import"./useFormValidation-CZv_sneF.js";import"./useField-BNabUhO6.js";import"./Button-CTIdFoEB.js";import"./Hidden-DkuxBDe3.js";import"./useLabels-CD1l8WQW.js";import"./useButton-Bo_828zl.js";import"./search-BRQ8jLRC.js";import"./createLucideIcon-DZRbkVj-.js";import"./ClearButton-Lb8vj5V4.js";import"./Button-CZ61ZB9b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YOCDJcZs.js";import"./VisuallyHidden-CjLtMi-P.js";import"./x-D3hyDxqQ.js";import"./FieldError-9H5y-Lx7.js";import"./Text-BLYY5elp.js";import"./Text-Dwv0_3Nj.js";import"./RSPContexts-CGn2RDsi.js";import"./Collection-tfVMgqky.js";import"./index-o9rNCB5G.js";import"./DragAndDrop-C91e0n9b.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1IcTZGQj.js";import"./SelectionManager-DyHkQ2Rb.js";import"./useEvent-DvjFxw-T.js";import"./useDescription-x32OOjmK.js";import"./inertValue-Z5MtaX1P.js";import"./useHighlightSelectionDescription-C5YP2tsF.js";import"./useUpdateEffect-B6m4yDbE.js";import"./ListKeyboardDelegate-C0dIApAx.js";import"./useHasTabbableChild-CAKEk_hp.js";import"./Checkbox-8H9nLVyC.js";import"./Form-hmbg8ZOW.js";import"./check-dNqRCIni.js";import"./useToggleState-D85sbZY_.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
