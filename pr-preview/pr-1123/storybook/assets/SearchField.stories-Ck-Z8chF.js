import{r as m,f as l,j as t}from"./iframe-DRF618FK.js";import{S as d}from"./SearchField-GIINO7h2.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BvdAkdyu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CHqxZhUB.js";import"./clsx-B-dksMZM.js";import"./Form-DM0uwM-A.js";import"./useFocusRing-fA7oZfLd.js";import"./index-Cjz8zzHP.js";import"./index-BaUCNhoE.js";import"./Input-9uBS3N6b.js";import"./Hidden-Dr-og7MG.js";import"./Button-D1u5VWPv.js";import"./useLabels-C9Po0DaQ.js";import"./useButton-DiQ0m4E1.js";import"./FieldError-D4ZV87iq.js";import"./Text-DzrFOIN-.js";import"./clsx-Ciqy0D92.js";import"./Text-B70hZHmJ.js";import"./RSPContexts-D-Mj00TC.js";import"./Group-DuP7zzMt.js";import"./useControlledState-2qvD9fXu.js";import"./useLocalizedStringFormatter-DdYi2mM1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D99h2r-n.js";import"./useField-BALZisil.js";import"./TextField.module-DdivwlC8.js";import"./search-Do6MqOzC.js";import"./createLucideIcon-B6lUMAq7.js";import"./x-C1n_E1v7.js";import"./useLocalizedStringFormatter-CsD_6hYo.js";import"./Button-BUqgdpCe.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-fImUcePD.js";import"./Collection-D9IGT1mQ.js";import"./index-4E03tZY9.js";import"./DragAndDrop-yiIT2M3I.js";import"./getScrollParent-E0P1bmgx.js";import"./scrollIntoView-NDoO0M_I.js";import"./SelectionIndicator-DjfnhSQR.js";import"./SelectionManager-Dn6WZ7i6.js";import"./useEvent-7_b0iMeF.js";import"./useDescription-BYobcx8b.js";import"./inertValue-CQPfl1od.js";import"./useHighlightSelectionDescription-Dv7cIbnD.js";import"./useUpdateEffect-Cq3iqZiV.js";import"./ListKeyboardDelegate-C0cDa1dw.js";import"./useHasTabbableChild-BWSU88Qx.js";import"./Checkbox-DQWCfxOO.js";import"./check-CVrAzfNW.js";import"./useToggleState-D3aRqPPt.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
