import{r as m,f as l,j as t}from"./iframe-ByTr7nlQ.js";import{S as d}from"./SearchField-Cbpk0rpB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-EpZ5zIvA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BtbeVzab.js";import"./clsx-B-dksMZM.js";import"./Form-Ba-xR42s.js";import"./useFocusRing-BjdQLYQY.js";import"./index-tkq_ZtSc.js";import"./index-BqV0DkUs.js";import"./Input-Bex5Ft88.js";import"./Hidden-BuUimY0Q.js";import"./Button-BSq_-Fzo.js";import"./useLabel-Dw4tdRRI.js";import"./useLabels-BssvX8bv.js";import"./useButton-CMclMGMy.js";import"./FieldError-B_MaF9By.js";import"./Text-B83XfqSN.js";import"./clsx-Ciqy0D92.js";import"./Text-dWwsRFEm.js";import"./RSPContexts-6m7Yijnj.js";import"./Group-6zTvAcDv.js";import"./useControlledState-B7X5e3Qm.js";import"./useLocalizedStringFormatter-ByBwQZl0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrbrMX8I.js";import"./useField-Btp5d6yU.js";import"./TextField.module-DdivwlC8.js";import"./search-BHVOQ0T6.js";import"./createLucideIcon-hQqGcF6U.js";import"./x-CTnfdq1Z.js";import"./useLocalizedStringFormatter-B9QStVrX.js";import"./Button-CH4Ce674.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-jMWhN52g.js";import"./Collection-Baidu9Hh.js";import"./index-CwxHN_b1.js";import"./DragAndDrop-koMEwqeC.js";import"./getScrollParent-C2971BjC.js";import"./scrollIntoView-1sk2wFtb.js";import"./SelectionIndicator-CWCU-OCj.js";import"./SelectionManager-Ce3snNdv.js";import"./useEvent-DM7MuSEq.js";import"./useDescription-DLDUSAjo.js";import"./inertValue-CyBNVPAE.js";import"./useHighlightSelectionDescription-Buz0Jozm.js";import"./useUpdateEffect-B484aGL4.js";import"./ListKeyboardDelegate-CCfv3Pud.js";import"./useHasTabbableChild-CR34Nh1k.js";import"./Checkbox-CB33pnLT.js";import"./check-WiWXAt0f.js";import"./useToggleState-UQCg10Ui.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
