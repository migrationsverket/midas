import{r as m,f as l,j as t}from"./iframe-TDsHiw9c.js";import{S as d}from"./SearchField-Bv6lzaTV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B3vlpYaN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DFK3ftG0.js";import"./clsx-B-dksMZM.js";import"./Form-DrGj5S3q.js";import"./useFocusRing-D-BQBv-v.js";import"./index-CWZOiNf1.js";import"./index-Cblya1pl.js";import"./Input-Pda8CAWB.js";import"./Hidden-aVRRAvvd.js";import"./Button-BZ0QUIXr.js";import"./useLabel-De4TtVrY.js";import"./useLabels-z_MUf0yQ.js";import"./useButton-Be-gBZL5.js";import"./FieldError-D00axG9h.js";import"./Text-BDcQTCXw.js";import"./clsx-Ciqy0D92.js";import"./Text-BTMF7VME.js";import"./RSPContexts-CLirld8T.js";import"./Group-Fsc_xOdt.js";import"./useControlledState-BONMuXu4.js";import"./useLocalizedStringFormatter-Da5BvhPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZsD89Hj.js";import"./useField-Djaz5aQj.js";import"./TextField.module-DdivwlC8.js";import"./search-RQZX2FVx.js";import"./createLucideIcon-Diz4XGXj.js";import"./x-DlwJGxMz.js";import"./useLocalizedStringFormatter-DxUswB7b.js";import"./Button-BFdMqc_h.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CpvkWfyr.js";import"./Collection-C4PnsAov.js";import"./index-Bo4e0FZp.js";import"./DragAndDrop-Ct5fukGg.js";import"./getScrollParent-_JGFcv3G.js";import"./scrollIntoView-BIDXO_TJ.js";import"./SelectionIndicator-DNnBNT-w.js";import"./SelectionManager-D8wsNBur.js";import"./useEvent-DTTf9n44.js";import"./useDescription-DSTFIc6A.js";import"./inertValue-1KSRaiVj.js";import"./useHighlightSelectionDescription-BmBL6Abt.js";import"./useUpdateEffect-C5CzPJvJ.js";import"./ListKeyboardDelegate-BKyE-KHP.js";import"./useHasTabbableChild-Dfr6Jn_g.js";import"./Checkbox-DfyQNT3M.js";import"./check-B1b286Wz.js";import"./useToggleState-PcwM832p.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
