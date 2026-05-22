import{r as m,f as l,j as t}from"./iframe-CG21FvLg.js";import{S as d}from"./SearchField-BBEy5Bep.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DoOluorg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dfpd-lDd.js";import"./clsx-B-dksMZM.js";import"./Form-DCvqDcwU.js";import"./useFocusRing-UKlSaOwL.js";import"./index-DJQDMjGE.js";import"./index-DIUOAeZ0.js";import"./Input-BoL5jQWE.js";import"./Hidden-DHiBRU7w.js";import"./Button-eYd2LYW1.js";import"./useLabel-CK6_zand.js";import"./useLabels-DbIZAWFx.js";import"./useButton-EC9QZCu0.js";import"./FieldError-D1k-tzt9.js";import"./Text-D17DsBlZ.js";import"./clsx-Ciqy0D92.js";import"./Text-DYV6Mtqz.js";import"./RSPContexts-bVWhtwKV.js";import"./Group-DUq970bw.js";import"./useControlledState-py48MqsP.js";import"./useLocalizedStringFormatter-CZfKgiZn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4s5pB-U.js";import"./useField-pxlW-odg.js";import"./TextField.module-DdivwlC8.js";import"./search-CTz3wGj4.js";import"./createLucideIcon-DIP5Ktet.js";import"./x-DrfF8WsI.js";import"./useLocalizedStringFormatter-5oZjcWP5.js";import"./Button-DTO_Qu1U.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B-Rie-TX.js";import"./Collection-DKvsrM8n.js";import"./index-BMn1uAFZ.js";import"./DragAndDrop-CSmD6Zku.js";import"./getScrollParent-yFgCZLQn.js";import"./scrollIntoView-DbthYiWP.js";import"./SelectionIndicator-BYoIF3tz.js";import"./SelectionManager-Ddjx_Pab.js";import"./useEvent-DK1Ig8Tf.js";import"./useDescription-DzkVNNnf.js";import"./inertValue-BmD0wxbH.js";import"./useHighlightSelectionDescription-DguVfHcx.js";import"./useUpdateEffect-DxQssupH.js";import"./ListKeyboardDelegate-BsMDHkG0.js";import"./useHasTabbableChild-CmKGzVWD.js";import"./Checkbox-B-_9vtSC.js";import"./check-Bxx9wuzt.js";import"./useToggleState-CedVBW-i.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
