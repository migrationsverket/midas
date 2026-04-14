import{r as m,f as l,j as t}from"./iframe-CO-rhcep.js";import{S as d}from"./SearchField-KuDRBMoR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-d_jXNwSr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xXHSLQwD.js";import"./clsx-B-dksMZM.js";import"./Form-CBLlznOt.js";import"./useFocusRing-DON0ybQn.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./Input-AKFtLv_s.js";import"./Hidden-CWNbbLzJ.js";import"./Button-BEB_3r-L.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./FieldError-DWjrBszR.js";import"./Text-DdPGOhQT.js";import"./clsx-Ciqy0D92.js";import"./Text-BNQMcymU.js";import"./RSPContexts-B-Xm9PzS.js";import"./Group-DlhD-yy_.js";import"./useControlledState-ByGhFCbY.js";import"./useLocalizedStringFormatter-D2pDPRTj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BchuB83Y.js";import"./useField-J3SWMipS.js";import"./TextField.module-DdivwlC8.js";import"./search-D3ijwCdv.js";import"./createLucideIcon-oXqbvAOH.js";import"./x-BAtRtlFw.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";import"./Button-ChDRE6gD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C7JdZ-qs.js";import"./Collection--YUStxrO.js";import"./index-COspV66_.js";import"./DragAndDrop-BlEdoZh1.js";import"./getScrollParent-BKQZghjE.js";import"./scrollIntoView-D7XGELv_.js";import"./SelectionIndicator--9j1Qi6g.js";import"./SelectionManager-7j3V1-Q2.js";import"./useEvent-BTYXRaQg.js";import"./useDescription-Be4D-VmW.js";import"./inertValue-A8G8LvZq.js";import"./useHighlightSelectionDescription-DEtBqXIx.js";import"./useUpdateEffect-CrpVGJlV.js";import"./ListKeyboardDelegate-CWdsneQG.js";import"./useHasTabbableChild-BbNYwA9I.js";import"./Checkbox-B3ChRy9v.js";import"./check-Cp1_c2dB.js";import"./useToggleState-DLq7zdt4.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
