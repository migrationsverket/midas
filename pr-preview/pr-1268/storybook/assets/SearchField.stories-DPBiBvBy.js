import{r as m,f as l,j as t}from"./iframe-usp88RXh.js";import{S as d}from"./SearchField-x6QBHhvz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CuwiXGYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXqK3GQS.js";import"./clsx-B-dksMZM.js";import"./Form-DUUm_saO.js";import"./useFocusRing-BnVcW9EZ.js";import"./index-BaVleoZK.js";import"./index-B6kb6Xt1.js";import"./Input-DaBhAxAY.js";import"./Hidden-BTFNJ6XH.js";import"./Button-B-TKlEdD.js";import"./useLabel-Rz3gMjr1.js";import"./useLabels-BlUIkC-Y.js";import"./useButton-Dr8gKvJs.js";import"./FieldError-DqHkKxnT.js";import"./Text-nB3EVkcg.js";import"./clsx-Ciqy0D92.js";import"./Text-BRG4rOQY.js";import"./RSPContexts-D2RkbuPx.js";import"./Group-CnsB5Sjn.js";import"./useControlledState-Bk0Ug2PQ.js";import"./useLocalizedStringFormatter-zmPeK12I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DBqYH0v-.js";import"./useField-CCIeI78y.js";import"./TextField.module-DdivwlC8.js";import"./search-2EQpNA1i.js";import"./createLucideIcon-DHgdMN24.js";import"./x-BTd5rXGN.js";import"./useLocalizedStringFormatter-JvTntPif.js";import"./Button-DOBuF016.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVXdiwcx.js";import"./Collection-BUmyaGSs.js";import"./index-tOgqOeDj.js";import"./DragAndDrop-JhBysKrS.js";import"./getScrollParent-C_HcNQWA.js";import"./scrollIntoView-CDzWWEyI.js";import"./SelectionIndicator-Bd8Rqh60.js";import"./SelectionManager-UhU7cBz3.js";import"./useEvent-DwdxgGhf.js";import"./useDescription-aGifrTIo.js";import"./inertValue-CwHtdgbY.js";import"./useHighlightSelectionDescription-BEAxuPhJ.js";import"./useUpdateEffect-BaxWgQvk.js";import"./ListKeyboardDelegate-B6XtyFtu.js";import"./useHasTabbableChild-D_A9E9IT.js";import"./Checkbox-Dqu5YLvF.js";import"./check-Bff4OiiI.js";import"./useToggleState-OzYakdWA.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
