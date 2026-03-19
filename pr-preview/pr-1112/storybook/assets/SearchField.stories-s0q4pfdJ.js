import{r as m,f as l,j as t}from"./iframe-CPuYvm8s.js";import{S as d}from"./SearchField-CPCQIFVv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CJm6lSOV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CE1Vntqw.js";import"./clsx-B-dksMZM.js";import"./Form-73T4bL8w.js";import"./useFocusRing-QQHGmBCu.js";import"./index-DBbEfBNG.js";import"./index-D0qZXW9E.js";import"./Input-6ZVMyxQx.js";import"./Hidden-BWUoGLqJ.js";import"./Button-CPLgo8WB.js";import"./useLabels-DXd6EmCJ.js";import"./useButton-CRB1vlh0.js";import"./FieldError-G-kOnKNy.js";import"./Text-fDukTeyt.js";import"./clsx-Ciqy0D92.js";import"./Text-DVquWBhJ.js";import"./RSPContexts-B80FC-gZ.js";import"./Group-DmK9oZhm.js";import"./useControlledState-BltVdFKI.js";import"./useLocalizedStringFormatter-B0oCO7RT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wpiYh644.js";import"./useField-BBgvhRQz.js";import"./TextField.module-DdivwlC8.js";import"./search-CH1moU-V.js";import"./createLucideIcon-DGj_OZpv.js";import"./x-Mxy9Nn72.js";import"./useLocalizedStringFormatter-CLkxGaNH.js";import"./Button-B6VpCJV_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Di6zhsCH.js";import"./Collection-BDFUB0zS.js";import"./index-BfJi_mRf.js";import"./DragAndDrop-D6_sP7W3.js";import"./getScrollParent-BCbGbaUX.js";import"./scrollIntoView-BxCcwxL9.js";import"./SelectionIndicator-CWCP1nsE.js";import"./SelectionManager-BsJSLxME.js";import"./useEvent-Dhfs_hD8.js";import"./useDescription-CiB6T9-T.js";import"./inertValue-EoTagxD6.js";import"./useHighlightSelectionDescription-DRAfK2wY.js";import"./useUpdateEffect-CDFq6SMA.js";import"./ListKeyboardDelegate-BHBk4Gfh.js";import"./useHasTabbableChild-Cg2xMY5u.js";import"./Checkbox-B2q5vS6v.js";import"./check-DPC-Spb_.js";import"./useToggleState-DHontYK5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
