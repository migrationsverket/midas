import{r as m,f as l,j as t}from"./iframe-BJQY1bvJ.js";import{S as d}from"./SearchField-qB-FNFYh.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dnh7Pz36.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C_pcrP7U.js";import"./utils-lif94hNf.js";import"./useLocalizedStringFormatter-BDBiLNys.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-eFRejKJJ.js";import"./useFocusRing-BLqAyq6i.js";import"./index-tP79n4Xh.js";import"./index-IY5nP7ez.js";import"./useFormValidation-BsxZg-gF.js";import"./useField-DU--EPtB.js";import"./Button-tbssrMuS.js";import"./Hidden-DoOxpBOx.js";import"./useLabels-WB4c8N4J.js";import"./useButton-CsuJz0cJ.js";import"./search-DrEmbXAJ.js";import"./createLucideIcon-BjfGBRzU.js";import"./ClearButton-DJ7zS6jT.js";import"./Button-BJZHHaN3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CsRXfCs5.js";import"./VisuallyHidden-DVVhBCOd.js";import"./x-md0iaidC.js";import"./FieldError-B56sTIqy.js";import"./Text-BNAvgz7D.js";import"./Text-DS3gleYA.js";import"./RSPContexts-CdLg8ZQ-.js";import"./Collection-DdWaMwwY.js";import"./index-AO2QVlWM.js";import"./DragAndDrop-DOBoE-rh.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_Pwu52k.js";import"./SelectionManager-Dkp955FZ.js";import"./useEvent-CwuHowAX.js";import"./useDescription-CCnP-Uo3.js";import"./inertValue-D8CFjVLD.js";import"./useHighlightSelectionDescription-p-obloMy.js";import"./useUpdateEffect-DyBRU_UP.js";import"./ListKeyboardDelegate-BYmQaOVb.js";import"./useHasTabbableChild-Dl5WzB4c.js";import"./Checkbox-BxICYtoY.js";import"./Form-CAdVlO2f.js";import"./check-Dopf3zVG.js";import"./useToggleState-CRuVgnLf.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
