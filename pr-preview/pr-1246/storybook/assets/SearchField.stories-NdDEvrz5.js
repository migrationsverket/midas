import{r as m,f as l,j as t}from"./iframe-Dy3Rw66z.js";import{S as d}from"./SearchField-n5VfhflK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-697clG_C.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DtZwbp1W.js";import"./clsx-B-dksMZM.js";import"./Form-wengfQtM.js";import"./useFocusRing-OfUNuA-J.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./Input-DYmzIH_X.js";import"./Hidden-BiAiu52X.js";import"./Button-DWNrJ0qN.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./FieldError-CRQYtwdw.js";import"./Text-CjiLEpJA.js";import"./clsx-Ciqy0D92.js";import"./Text-BOYOdsAw.js";import"./RSPContexts-C0IvGsnI.js";import"./Group-m_LNitHg.js";import"./useControlledState-CujSUpWY.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0gzukQn.js";import"./useField-CNgzpJU1.js";import"./TextField.module-DdivwlC8.js";import"./search-CBT_kppG.js";import"./createLucideIcon-CGcaihwO.js";import"./x-BY2wOibv.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Button-Cl_Vf5i1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ke2bwlqF.js";import"./Collection-B5ifOA6k.js";import"./index-B66NDRAz.js";import"./DragAndDrop-BMJcSO9_.js";import"./getScrollParent-sGEfSoh4.js";import"./scrollIntoView-DNWLzZw6.js";import"./SelectionIndicator-D2Bve7Mk.js";import"./SelectionManager-CfByhG1g.js";import"./useEvent-DcOaT4Vn.js";import"./useDescription-BNi02mG9.js";import"./inertValue-C5lU86JA.js";import"./useHighlightSelectionDescription-DYaqZ9Lq.js";import"./useUpdateEffect-tVGoV8hb.js";import"./ListKeyboardDelegate-BafHrM3o.js";import"./useHasTabbableChild-BuNbKlDZ.js";import"./Checkbox-DEfX6SC9.js";import"./check-D_PuwPYh.js";import"./useToggleState-8NVzvk0V.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
