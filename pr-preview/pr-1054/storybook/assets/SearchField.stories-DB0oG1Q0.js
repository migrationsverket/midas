import{r as m,f as l,j as t}from"./iframe-Bzo4kowl.js";import{S as d}from"./SearchField-HJPgq5gC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DMHYqmE7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CM5VfWQj.js";import"./utils-DXTeB8HK.js";import"./useLocalizedStringFormatter-D4nT0ah_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOBbLqdR.js";import"./useFocusRing-DHhWIO2N.js";import"./index-CNJaAGk8.js";import"./index-aL6k1mzJ.js";import"./useFormValidation-GncoW9Ln.js";import"./useField-vapzvJ0z.js";import"./Button-CgmEDWQ8.js";import"./Hidden-DHoilVKC.js";import"./useLabels-CEKsYTJS.js";import"./useButton-D9o58VID.js";import"./search-Buy10KPU.js";import"./createLucideIcon-DA2PtDq7.js";import"./ClearButton-CAAyAI1O.js";import"./Button-ChuJZebW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUD2yrtg.js";import"./VisuallyHidden-B6Mvmfcl.js";import"./x-cYo9yJLa.js";import"./FieldError-DfYo7bjn.js";import"./Text-CzwqkTgC.js";import"./Text-BflvD664.js";import"./RSPContexts-De0PVEjF.js";import"./Collection-BW8Nuq6f.js";import"./index-CKKtxtpf.js";import"./DragAndDrop-DEWaq8rv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_R46UR9N.js";import"./SelectionManager-ZdUPh4YZ.js";import"./useEvent-TwMUr4g1.js";import"./useDescription-D0ROJkmX.js";import"./inertValue-Cu4zmk3R.js";import"./useHighlightSelectionDescription-DoICEJDC.js";import"./useUpdateEffect-CmJ59jmi.js";import"./ListKeyboardDelegate-IoYbsUEH.js";import"./useHasTabbableChild-BrnA4R44.js";import"./Checkbox-tOYXjWLw.js";import"./Form-Dhxwb2cI.js";import"./check-BUmPmfFB.js";import"./useToggleState-Djq1_LZf.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
