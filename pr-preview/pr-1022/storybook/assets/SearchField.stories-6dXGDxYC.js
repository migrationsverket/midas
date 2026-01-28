import{r as m,f as l,j as t}from"./iframe-B4Bxc31-.js";import{S as d}from"./SearchField-PZpo2tw3.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DkYLG2oY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cg9KEN5b.js";import"./utils-CeZcgYm6.js";import"./useLocalizedStringFormatter-D5WpXGBK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D1gI0ZEN.js";import"./useFocusRing-BfKHzdgs.js";import"./index-C4J05Lc5.js";import"./index-DgJUXc_n.js";import"./useFormValidation-BQSgNpFd.js";import"./useField-CUKRhRws.js";import"./Button-CDG3o-tS.js";import"./Hidden-C62-4jmO.js";import"./useLabels-wF9e--1W.js";import"./useButton-CcZzD6iW.js";import"./search-CbHgkRs7.js";import"./createLucideIcon-DGUSaHO7.js";import"./ClearButton-BSeWXGyv.js";import"./Button-CN8pseCj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFzkaQ8-.js";import"./VisuallyHidden-DlEhGwXr.js";import"./x-CCZLGaNC.js";import"./FieldError-CihcasJE.js";import"./Text-r5dJNPiY.js";import"./Text-JHx8n9q1.js";import"./RSPContexts-D2qBqFC6.js";import"./Collection-B9xM4Pal.js";import"./index-mbFFKS_D.js";import"./DragAndDrop-ZuhJeQnC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CEVTJOdn.js";import"./SelectionManager-L_Duk7qi.js";import"./useEvent-D5R27whq.js";import"./useDescription-CSCKMn8T.js";import"./inertValue-Bk2hu2eY.js";import"./useHighlightSelectionDescription-CA2BLUQ3.js";import"./useUpdateEffect-PTDHJgy2.js";import"./ListKeyboardDelegate-D96mliyZ.js";import"./useHasTabbableChild-VMSMbwmB.js";import"./Checkbox-DkQ_AWlW.js";import"./Form-Ds8b_gZJ.js";import"./check-CFLl1Tqx.js";import"./useToggleState-CH3c1uO2.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
