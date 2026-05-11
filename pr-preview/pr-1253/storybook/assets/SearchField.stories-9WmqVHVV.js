import{r as m,f as l,j as t}from"./iframe-B--hDPXb.js";import{S as d}from"./SearchField-BCHo2peb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-LiLYTGnH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DaPQhgmu.js";import"./clsx-B-dksMZM.js";import"./Form-U2PISRcB.js";import"./useFocusRing-DBQnIZ7Q.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./Input-DgqP73Ss.js";import"./Hidden-CMfVl8d1.js";import"./Button-C9U5DdED.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./FieldError-B0I-izd3.js";import"./Text-eQWaQXgM.js";import"./clsx-Ciqy0D92.js";import"./Text-BKE4mpEc.js";import"./RSPContexts-DkE08RbH.js";import"./Group-0GBrZlGV.js";import"./useControlledState-DZkg54SI.js";import"./useLocalizedStringFormatter-ZP-DQ3dI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5SKRwZR.js";import"./useField-B8UugQx6.js";import"./TextField.module-DdivwlC8.js";import"./search-ccLp3p2S.js";import"./createLucideIcon-BSPs0YiP.js";import"./x-D9iWQ3e4.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./Button-Bz3nOl8L.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-8_Tg-jOG.js";import"./Collection-CUFtkeWs.js";import"./index-DHsR75bP.js";import"./DragAndDrop-k4lxfqez.js";import"./getScrollParent-DYArvUGl.js";import"./scrollIntoView-Cdvuqxjj.js";import"./SelectionIndicator-C09sddeF.js";import"./SelectionManager-oY1epqDt.js";import"./useEvent-DlQ_v0NJ.js";import"./useDescription-BIxNiA0o.js";import"./inertValue-B1MBRQsi.js";import"./useHighlightSelectionDescription-B0RykjEi.js";import"./useUpdateEffect-BfKX2Srt.js";import"./ListKeyboardDelegate-B2SKkgzs.js";import"./useHasTabbableChild-p4FAe4EC.js";import"./Checkbox-D6nqcJwJ.js";import"./check-DgcRJV7f.js";import"./useToggleState-BMf-aMpQ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
