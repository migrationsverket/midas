import{r as m,f as l,j as t}from"./iframe-eIKe2X_m.js";import{S as d}from"./SearchField-Br5IbuSC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CT2qUibk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoPGT07A.js";import"./clsx-B-dksMZM.js";import"./Form-BbvKGnjc.js";import"./useFocusRing-ChUuwE-2.js";import"./index-DYK-fZpj.js";import"./index-DgJxkeaR.js";import"./Input-Dfdq0cPF.js";import"./Hidden-CXbku1y6.js";import"./Button-7V_IyEW5.js";import"./useLabel-BDJHN6yJ.js";import"./useLabels-CzQg4_Ye.js";import"./useButton-JGMEg_eW.js";import"./FieldError-xOrsoR1D.js";import"./Text-CiEoCLNV.js";import"./clsx-Ciqy0D92.js";import"./Text-CuxH_tBg.js";import"./RSPContexts-CbT1tTzu.js";import"./Group-CtPsluas.js";import"./useControlledState-CGyGwo-A.js";import"./useLocalizedStringFormatter-LPlwK2CH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CudkVjWt.js";import"./useField-DqbOOgGS.js";import"./TextField.module-DdivwlC8.js";import"./search-CIgLx815.js";import"./createLucideIcon-CLkqqabX.js";import"./x-Dk3bNdoj.js";import"./useLocalizedStringFormatter-C4qP-j6o.js";import"./Button-B-V9quu1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CSQH58ck.js";import"./Collection-BkqcoK6r.js";import"./index-CKqS6MCL.js";import"./DragAndDrop-C2OnYosn.js";import"./getScrollParent-DJBZNJub.js";import"./scrollIntoView-C35qIzu7.js";import"./SelectionIndicator-CBGgJV-O.js";import"./SelectionManager-BVEVky2i.js";import"./useEvent-CHBVldLN.js";import"./useDescription-C7d6IwkV.js";import"./inertValue-D-K8UVly.js";import"./useHighlightSelectionDescription-7kye4o1s.js";import"./useUpdateEffect-HkqiKOYN.js";import"./ListKeyboardDelegate-jHRTOiqQ.js";import"./useHasTabbableChild-55C6CMFP.js";import"./Checkbox-BsG-xzf4.js";import"./check-BacrYI6N.js";import"./useToggleState-BXMN098i.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
