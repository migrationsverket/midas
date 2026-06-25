import{r as m,f as l,j as t}from"./iframe-C2f3UQ4Q.js";import{S as d}from"./SearchField-Cbl3Zihd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dtmu9xGP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLD-we63.js";import"./clsx-B-dksMZM.js";import"./Form-CgrJV7ns.js";import"./useFocusRing-DVjvJ21q.js";import"./index-l0Ekt22g.js";import"./index-CjqMqS35.js";import"./Input-DAHgA2q_.js";import"./Hidden-BHtTPiMo.js";import"./Button-CzARpBSV.js";import"./useLabel-DqyzBRvV.js";import"./useLabels-DcONnofe.js";import"./useButton-CJnW-LDE.js";import"./FieldError-BA_pXY2h.js";import"./Text-CFY7ThNC.js";import"./clsx-Ciqy0D92.js";import"./Text-BR3njYC5.js";import"./RSPContexts-Bp3NLRK2.js";import"./Group-oML09Sjz.js";import"./useControlledState-BkR5yEcJ.js";import"./useLocalizedStringFormatter-BB6QmVJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DpnzASRr.js";import"./useField-0g5R6fiS.js";import"./TextField.module-DdivwlC8.js";import"./search-CqsqO9Of.js";import"./createLucideIcon-B0GS721z.js";import"./x-CEzz9POE.js";import"./useLocalizedStringFormatter-DxAPCXcs.js";import"./Button-Cubx1h0F.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cug_bQSe.js";import"./Collection-D-JS7TLq.js";import"./index-CoMFBIZN.js";import"./DragAndDrop-BR3Qm14y.js";import"./getScrollParent-Cb8Zmktw.js";import"./scrollIntoView-Bp6pSfX4.js";import"./SelectionIndicator-D6k5vYNx.js";import"./SelectionManager-Dawn3y1S.js";import"./useEvent-CN0f60Tw.js";import"./useDescription-Majc7XiZ.js";import"./inertValue-e_Q5UQpf.js";import"./useHighlightSelectionDescription-Bx2MRiLY.js";import"./useUpdateEffect-8E-OXuP1.js";import"./ListKeyboardDelegate-B4-w-E8p.js";import"./useHasTabbableChild-DcaOWsL1.js";import"./Checkbox-DFf5tVsP.js";import"./check-Bs6JvRLE.js";import"./useToggleState-Ci18zkgn.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
