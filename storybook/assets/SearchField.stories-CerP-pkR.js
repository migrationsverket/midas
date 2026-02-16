import{r as m,f as l,j as t}from"./iframe-B1z-gzHE.js";import{S as d}from"./SearchField-CbyQaAMV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ByZqmba8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B3HQDcvg.js";import"./utils-CEIeqKii.js";import"./useLocalizedStringFormatter-DWVhSEJI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-4hdYMRQF.js";import"./useFocusRing-BvsKcShr.js";import"./index-Di8dd2eE.js";import"./index-BOkWMc0e.js";import"./useFormValidation-w3v3W7gn.js";import"./useField-d_oeHlDs.js";import"./Button-D77i-hon.js";import"./Hidden-Cs2MCe5s.js";import"./useLabels-Dmi7cw95.js";import"./useButton-fu8jG2Pq.js";import"./search-LUW0rxPD.js";import"./createLucideIcon-B5DI2OI0.js";import"./ClearButton-7nJzYbhO.js";import"./Button-pqjMbnpp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEmp5YcF.js";import"./VisuallyHidden-Bj8GOm3o.js";import"./x-CglcQKFI.js";import"./FieldError-CT39iQs7.js";import"./Text-BYCHxNL_.js";import"./Text-Dl9x0CG8.js";import"./RSPContexts-BGkblzEm.js";import"./Collection-DOfSxpZ2.js";import"./index-Bb4iAelt.js";import"./DragAndDrop-CLGU8ndI.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bo2ubr1N.js";import"./SelectionManager-D7xh7jh3.js";import"./useEvent-EYVAMCj5.js";import"./useDescription-DAgCVnlX.js";import"./inertValue-utZy8Oxn.js";import"./useHighlightSelectionDescription-CyPtYsUi.js";import"./useUpdateEffect-CQCOSQ8-.js";import"./ListKeyboardDelegate-CUzhUpcn.js";import"./useHasTabbableChild-DHj0jJ8R.js";import"./Checkbox-G956RdEt.js";import"./Form-CuLwN7xk.js";import"./check-DEZ28te5.js";import"./useToggleState-BBMcRgXS.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
