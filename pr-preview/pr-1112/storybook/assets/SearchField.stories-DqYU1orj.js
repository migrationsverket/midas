import{r as m,f as l,j as t}from"./iframe-CaGxyJQ5.js";import{S as d}from"./SearchField-C7xoU3ng.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DO5OacRg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CNCDq7j0.js";import"./utils-CVJqKyu4.js";import"./useLocalizedStringFormatter-CZOLyc3D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BxWPDhyK.js";import"./useFocusRing-LTUTFWnB.js";import"./index-K3VTbzXg.js";import"./index-DRbza-0A.js";import"./useFormValidation-tvbfblk7.js";import"./useField-DTyiot4U.js";import"./Button-Bn3l1eKL.js";import"./Hidden-BAAaulvK.js";import"./useLabels-BlAPVOi_.js";import"./useButton-bmkikoqa.js";import"./search-DuQmlpWC.js";import"./createLucideIcon-yEXXgYRp.js";import"./ClearButton-yEfcqPfd.js";import"./x-CBNTpHd8.js";import"./Button-SlKntRzd.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdAzyJ4I.js";import"./VisuallyHidden-BZzDvx5i.js";import"./FieldError-BBlPKEY6.js";import"./Text-Dtkx7GWh.js";import"./Text-W3mtiTBT.js";import"./RSPContexts-_cn7M6Ef.js";import"./Collection-CE0nJlW6.js";import"./index-Bx7R-ad4.js";import"./DragAndDrop-NKVGIY_C.js";import"./getScrollParent-B1-aYvPm.js";import"./scrollIntoView-yBkYCpPJ.js";import"./SelectionIndicator-DM64-xB3.js";import"./SelectionManager-DzE4SKgf.js";import"./useEvent-CzPSy7Rs.js";import"./useDescription-BuSKxMJt.js";import"./inertValue-DmdUGOcl.js";import"./useHighlightSelectionDescription-DrOWlOoz.js";import"./useUpdateEffect-QsPXsxHy.js";import"./ListKeyboardDelegate-DNfzS-AW.js";import"./useHasTabbableChild-D16MoY09.js";import"./Checkbox-DsP29CQ3.js";import"./Form-Cfd2cFqg.js";import"./check-BU161kP0.js";import"./useToggleState-TxwGpfk5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
