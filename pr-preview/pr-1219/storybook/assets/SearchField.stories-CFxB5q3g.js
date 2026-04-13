import{r as m,f as l,j as t}from"./iframe-Db_qDyjb.js";import{S as d}from"./SearchField-CxxXzdiX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-XUil3chB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B1ump1uN.js";import"./clsx-B-dksMZM.js";import"./Form-qvxF-3xc.js";import"./useFocusRing-CvFtjn9f.js";import"./index-BrCAN2R3.js";import"./index-rXvRCXG4.js";import"./Input-BU2rvLfi.js";import"./Hidden-Ck1I1Pl6.js";import"./Button-DmcShG5W.js";import"./useLabel-79lcnvNd.js";import"./useLabels-DU_Qs8Z-.js";import"./useButton-DzefyB67.js";import"./FieldError-3n-vV-Ng.js";import"./Text-DysxiSoS.js";import"./clsx-Ciqy0D92.js";import"./Text-CV2l2NwE.js";import"./RSPContexts-vbQVcb1z.js";import"./Group-Cr5jZpuK.js";import"./useControlledState-CW90Ui0G.js";import"./useLocalizedStringFormatter-DgJKEd-_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZHRixjc.js";import"./useField-C9_g4vAO.js";import"./TextField.module-DdivwlC8.js";import"./search-BbpvgoWl.js";import"./createLucideIcon-Dj8isrVr.js";import"./x-DpepR7rv.js";import"./useLocalizedStringFormatter-TCo9J1WR.js";import"./Button-B6sBamwP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DI0T0a8c.js";import"./Collection-DA76HGew.js";import"./index-3XjXCAx7.js";import"./DragAndDrop-CfxVfGNH.js";import"./getScrollParent-CSjng6XF.js";import"./scrollIntoView-mNDR3iIh.js";import"./SelectionIndicator-CJDW6T4U.js";import"./SelectionManager-C3a8qmxp.js";import"./useEvent-BcyDDH_o.js";import"./useDescription-mlqK3r8Y.js";import"./inertValue-NdfqVnOi.js";import"./useHighlightSelectionDescription-BmM-93Bk.js";import"./useUpdateEffect-CLG66ZYz.js";import"./ListKeyboardDelegate-Cd5NcBIV.js";import"./useHasTabbableChild-CrJCq_Bu.js";import"./Checkbox-B5rshVi1.js";import"./check-Hna9uK0h.js";import"./useToggleState-CqzEiGMZ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
