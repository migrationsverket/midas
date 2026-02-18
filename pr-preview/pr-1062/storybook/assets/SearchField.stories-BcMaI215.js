import{r as m,f as l,j as t}from"./iframe-DT61WbGn.js";import{S as d}from"./SearchField-CAyV7LdY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cx26iBRp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BE2wyFhJ.js";import"./utils-BNrItRfy.js";import"./useLocalizedStringFormatter-B7AhjKe6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQ_khQtE.js";import"./useFocusRing-DYTAd8_U.js";import"./index-BOjhewCw.js";import"./index-B6JELXQq.js";import"./useFormValidation-DceVtZUU.js";import"./useField-Br0fbhq2.js";import"./Button-9A3cEUNU.js";import"./Hidden-DkIy8QtB.js";import"./useLabels-BLjzORvQ.js";import"./useButton-DBUAos9E.js";import"./search-DTNz-v32.js";import"./createLucideIcon-BxpBX-dW.js";import"./ClearButton-Ddfp9o9j.js";import"./Button-B3A8mU5i.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfwtoEKk.js";import"./VisuallyHidden-CidbwADT.js";import"./x-9GyaX2Up.js";import"./FieldError-BPllYc2R.js";import"./Text-BiokIEeM.js";import"./Text-BlgJzzP7.js";import"./RSPContexts-BKYkq1wo.js";import"./Collection-Cmjs1m8V.js";import"./index-CLRq1jWZ.js";import"./DragAndDrop-DwHmLZiZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-2o4OglFe.js";import"./SelectionManager-BklfJdWU.js";import"./useEvent-BKGBdaZ_.js";import"./useDescription-oZ2Jk6d8.js";import"./inertValue-BtgmqKzK.js";import"./useHighlightSelectionDescription-TGw2sxAE.js";import"./useUpdateEffect-DOMiGJmv.js";import"./ListKeyboardDelegate-CMnkCmi9.js";import"./useHasTabbableChild-BnHn2rEx.js";import"./Checkbox-tji6o_0-.js";import"./Form-IlYQTl6M.js";import"./check-DO2n0ClM.js";import"./useToggleState-CUZ1Y75y.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
