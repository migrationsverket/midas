import{r as m,f as l,j as t}from"./iframe-a-0QSjcf.js";import{S as d}from"./SearchField-gbJOuBEa.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-MlKq1go2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQziIZ9T.js";import"./utils-B_-tSBeZ.js";import"./useLocalizedStringFormatter-JU1_R9Z5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-NOopuUc-.js";import"./useFocusRing-Czic3fia.js";import"./index-7-rgoRIg.js";import"./index-BW6KTqQa.js";import"./useFormValidation-Du4LTqk6.js";import"./useField-CGPrKXG5.js";import"./Button-C60PLABZ.js";import"./Hidden-B9ZA2jSe.js";import"./useLabels-BJ97I3JO.js";import"./useButton-CYqr7EFX.js";import"./search-BaZU2baT.js";import"./createLucideIcon-Dsg6rjRC.js";import"./ClearButton-DAuEPM6i.js";import"./Button-D2oQUHVT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3fQfCDh.js";import"./VisuallyHidden-B518bO6H.js";import"./x-CIpaA31e.js";import"./FieldError-DsswgMzG.js";import"./Text-BKQI6ihA.js";import"./Text-B2LxCzJs.js";import"./RSPContexts-D7vEIwAp.js";import"./Collection-ErSyUHVz.js";import"./index-DWKJl1jK.js";import"./DragAndDrop-DwmQC6a1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3aVRxCVz.js";import"./SelectionManager-Cos7Ara1.js";import"./useEvent-DG_5MX2s.js";import"./useDescription-DFv-da9o.js";import"./inertValue-C55LIryD.js";import"./useHighlightSelectionDescription-oyey0ogK.js";import"./useUpdateEffect-B3Cg0W0K.js";import"./ListKeyboardDelegate-B5PjmmDN.js";import"./useHasTabbableChild-C4HgUrRB.js";import"./Checkbox-sxI50tZB.js";import"./Form-BGTqQH8a.js";import"./check-aa384UvO.js";import"./useToggleState-Ch8vNtgH.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
