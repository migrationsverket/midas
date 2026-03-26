import{r as m,f as l,j as t}from"./iframe-GWyqpu_M.js";import{S as d}from"./SearchField-DmxiwvjC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DOLM_7U9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dt2I5FC1.js";import"./clsx-B-dksMZM.js";import"./Form-sABXXLqd.js";import"./useFocusRing-BEBkue70.js";import"./index-D2WS1qCH.js";import"./index-CwQDUu6A.js";import"./Input-C0LTVSrQ.js";import"./Hidden-i5KMI_eW.js";import"./Button-DaVw9Yu8.js";import"./useLabel-DHRJ-v17.js";import"./useLabels-BvrpK5k3.js";import"./useButton-BCnnqreW.js";import"./FieldError-BY8gNanm.js";import"./Text-BzWdciNH.js";import"./clsx-Ciqy0D92.js";import"./Text-P__SInd9.js";import"./RSPContexts-BgONfnva.js";import"./Group-HQhXS4fd.js";import"./useControlledState-Cjxvjhkl.js";import"./useLocalizedStringFormatter-BQ4PapsB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzFMhfOD.js";import"./useField-hN3b_TA5.js";import"./TextField.module-DdivwlC8.js";import"./search-C5xpVS5_.js";import"./createLucideIcon-BoYLuSqv.js";import"./x-UXvlZnGy.js";import"./useLocalizedStringFormatter-CybCfRF3.js";import"./Button-CSLm8s2k.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-d58nTTlD.js";import"./Collection-Ci3sGuOc.js";import"./index-CI86LNLw.js";import"./DragAndDrop-DIBrgVpy.js";import"./getScrollParent-YkPIfx5c.js";import"./scrollIntoView-DV8eY3AZ.js";import"./SelectionIndicator-BVo-aGf1.js";import"./SelectionManager-CJExYech.js";import"./useEvent-BwgGsclp.js";import"./useDescription-DOshPb0-.js";import"./inertValue-DKvrHgVx.js";import"./useHighlightSelectionDescription-BPZwOzy9.js";import"./useUpdateEffect-icqL0YMh.js";import"./ListKeyboardDelegate-Cb__stUi.js";import"./useHasTabbableChild-DaE54ZKG.js";import"./Checkbox-D8mpmsQc.js";import"./check-DBZE0DN5.js";import"./useToggleState-0Rs8A2dl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
