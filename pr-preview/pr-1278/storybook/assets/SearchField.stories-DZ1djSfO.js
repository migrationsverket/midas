import{r as m,f as l,j as t}from"./iframe-A34tc1ma.js";import{S as d}from"./SearchField-V7NZlE0z.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DNkaXkND.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-iaIw3nix.js";import"./clsx-B-dksMZM.js";import"./Form-DALnZx4j.js";import"./useFocusRing-OnJtBabX.js";import"./index-Q8iWR-k3.js";import"./index-nqYRH_fx.js";import"./Input-DUNgLaBZ.js";import"./Hidden-Bx_LiQEx.js";import"./Button-CJGwxkR8.js";import"./useLabel-B5C-WKT7.js";import"./useLabels-m8TWtq0-.js";import"./useButton-Dk5W4KfY.js";import"./FieldError-DMBLsclX.js";import"./Text-PcmClRY0.js";import"./clsx-Ciqy0D92.js";import"./Text-Bo9OR3IW.js";import"./RSPContexts-BvXmiLjq.js";import"./Group-BprcskVh.js";import"./useControlledState-dFFgK4uz.js";import"./useLocalizedStringFormatter-CAgZjAaW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Caf_9lIH.js";import"./useField-CG1X9erO.js";import"./TextField.module-DdivwlC8.js";import"./search-BfWrWdnq.js";import"./createLucideIcon-Bnflbpu4.js";import"./x-8qJuT3y7.js";import"./useLocalizedStringFormatter-6FVavbxu.js";import"./Button-CEptxBDM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DFcjAmAE.js";import"./Collection-DXUX_Ij0.js";import"./index-jxQ6KrOQ.js";import"./DragAndDrop-CeE2n3vv.js";import"./getScrollParent-BfgMvCMm.js";import"./scrollIntoView-DqSfMztI.js";import"./SelectionIndicator-ADiRG3zF.js";import"./SelectionManager-BCe-zS_L.js";import"./useEvent-DAxeeYk2.js";import"./useDescription-CkN0W4le.js";import"./inertValue-D1HbhIP6.js";import"./useHighlightSelectionDescription-B2A08DAb.js";import"./useUpdateEffect-CclDi6Bj.js";import"./ListKeyboardDelegate-D5zJhQGj.js";import"./useHasTabbableChild-DFFZQwCO.js";import"./Checkbox-rWZBCy0O.js";import"./check-DQo00TMf.js";import"./useToggleState-Cl_yqkAM.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
