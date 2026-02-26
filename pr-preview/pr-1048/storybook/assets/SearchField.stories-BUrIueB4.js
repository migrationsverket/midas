import{r as m,f as l,j as t}from"./iframe-ClhcDk6-.js";import{S as d}from"./SearchField-BzzW5v6E.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DR4xMGKr.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRXmCCw_.js";import"./useObjectRef-LpWD1ACK.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOuVabl5.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./useFormValidation-B19vM6x-.js";import"./useField-CkQZEAr3.js";import"./Button-BSlJ97mj.js";import"./utils-DkVwfCPY.js";import"./Hidden-B4bEnCsb.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./search-CJ4KAdQ4.js";import"./createLucideIcon-DOkxF0Fr.js";import"./ClearButton-CqVY3OsP.js";import"./Button-Cmr495Vm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./x-B2X0pLHA.js";import"./FieldError-tXlATWOG.js";import"./Text-CCnFhlAG.js";import"./Text-EzA_ilFd.js";import"./RSPContexts-BA8Udrsv.js";import"./Collection--ZMTHkZa.js";import"./CollectionBuilder-CAo2ledx.js";import"./index-6lcNpfds.js";import"./DragAndDrop-QfsrZwaZ.js";import"./getScrollParent-FapgZLQg.js";import"./scrollIntoView-D07VY2Nc.js";import"./SelectionIndicator-1HtvkFRD.js";import"./SelectionManager-C04g7PAk.js";import"./useEvent-C5dcsaza.js";import"./useDescription-By0r32b_.js";import"./inertValue-CM3scvue.js";import"./useHighlightSelectionDescription-QPMLg-0j.js";import"./useUpdateEffect-CTU5idt4.js";import"./ListKeyboardDelegate-Cc2KEOw7.js";import"./useHasTabbableChild-DUot5m7T.js";import"./Checkbox-Bc9zWhjE.js";import"./Form-BINvuMk6.js";import"./check-CQg29no-.js";import"./useToggleState-DC61IpXt.js";const ge={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const be=["SimpleSearch"];export{i as SimpleSearch,be as __namedExportsOrder,ge as default};
