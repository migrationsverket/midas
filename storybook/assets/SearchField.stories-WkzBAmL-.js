import{r as m,f as l,j as t}from"./iframe-BQhS1Nl-.js";import{S as d}from"./SearchField-C08bk0Nq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-eZWEcdPJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DF0fFfyv.js";import"./utils-DX-1lbRH.js";import"./useLocalizedStringFormatter-B1JkIDRF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRi9-jgA.js";import"./useFocusRing-C7eLc3ua.js";import"./index-BaCUsZ-2.js";import"./index-DPBbUFQF.js";import"./useFormValidation-Yft9brF2.js";import"./useField-CGoqZBDN.js";import"./Button-Dr48bfBY.js";import"./Hidden-XO9eD8nd.js";import"./useLabels-DSkvQYsZ.js";import"./useButton-28B5gFXv.js";import"./search-BKN1u9cv.js";import"./createLucideIcon-DJtzdfmE.js";import"./ClearButton-DklIQQpD.js";import"./Button-DJ5OBxjs.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BsVfwROU.js";import"./VisuallyHidden-DxSkEFyH.js";import"./x-CxrMIGYH.js";import"./FieldError-CJdO8pv6.js";import"./Text-tc6oiTHM.js";import"./Text-C6md5qJ5.js";import"./RSPContexts-C79IcF5o.js";import"./Collection-CQ7e8hLV.js";import"./index-DS-ZCqJe.js";import"./DragAndDrop-zJcDPgbb.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9HbQ8qQ.js";import"./SelectionManager-CviCT7_t.js";import"./useEvent-DDuhPEOD.js";import"./useDescription-IaZzTqIH.js";import"./inertValue-g7JSoCQl.js";import"./useHighlightSelectionDescription-CFkYJ2K5.js";import"./useUpdateEffect-dcu9jAP6.js";import"./ListKeyboardDelegate-ClvxKoY7.js";import"./useHasTabbableChild-5rwNBZQf.js";import"./Checkbox-B_8H1U10.js";import"./Form-DH-AzjSt.js";import"./check-B4iuAmEF.js";import"./useToggleState-DT4lhJIb.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
