import{r as m,f as l,j as t}from"./iframe-CtUIZbYn.js";import{S as d}from"./SearchField-en__kcH8.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-nRKfxJff.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BQ5cbGs8.js";import"./utils-Cf9IpOmc.js";import"./useLocalizedStringFormatter-BowEyYzH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C1CAXUyf.js";import"./useFocusRing-6a21M1IJ.js";import"./index-Dm2Kv3ch.js";import"./index-KufTmFNN.js";import"./useFormValidation-BMvR5o2g.js";import"./useField-BYTu8s8W.js";import"./Button-CgO5Dbzf.js";import"./Hidden-BI0VMXn5.js";import"./useLabels-CjFYjORR.js";import"./useButton-zj2RIXSA.js";import"./search-BfrpztUe.js";import"./createLucideIcon-BRaxuuf5.js";import"./ClearButton-C8knOTWh.js";import"./Button-DQw6C-et.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BZJ3lJE8.js";import"./VisuallyHidden-D6i0gXjo.js";import"./x-CTAACZ5M.js";import"./FieldError-CbQk5RgW.js";import"./Text-yTCGhOU_.js";import"./Text-XrKnwqSN.js";import"./RSPContexts-DeSbQpXu.js";import"./Collection-8HCxu7jq.js";import"./index-DJjmA-yx.js";import"./DragAndDrop-CSjW8EaY.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZZ6Qs1R8.js";import"./SelectionManager-DT2Uo_1q.js";import"./useEvent-DO7npvYY.js";import"./useDescription-BIEKqWPT.js";import"./inertValue-BuhEuX5M.js";import"./useHighlightSelectionDescription-DUQj9rhc.js";import"./useUpdateEffect-B3DpEwN1.js";import"./ListKeyboardDelegate-8pxwgSLl.js";import"./useHasTabbableChild--JVe2vVH.js";import"./Checkbox-CTXeHALx.js";import"./Form-t1tJA9Vg.js";import"./check-BqCkXcIC.js";import"./useToggleState-DYVY7h6I.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
