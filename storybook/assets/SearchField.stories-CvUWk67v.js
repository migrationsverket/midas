import{r as m,f as l,j as t}from"./iframe-BMx8CJ_s.js";import{S as d}from"./SearchField-9VRUf2Zu.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DJA9zDiG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbJAHATE.js";import"./utils-mLbJG5lt.js";import"./useLocalizedStringFormatter-BgZX5ldx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B0Cqt9ot.js";import"./useFocusRing-C7jWGJZo.js";import"./index-BdeXmt1O.js";import"./index-2hUmUoIt.js";import"./useFormValidation-BT0aeyXX.js";import"./useField-DV_7nNQX.js";import"./Button-DAS2aWUT.js";import"./Hidden-bWwRORGP.js";import"./useLabels-0a9zero9.js";import"./useButton-DYdnoqIL.js";import"./search-CIlUqYQK.js";import"./createLucideIcon-BUxxpft6.js";import"./ClearButton-No11DHO0.js";import"./Button-Cj8oElf-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CkXFCrEO.js";import"./VisuallyHidden-C38pbAG2.js";import"./x-DY7xSTl4.js";import"./FieldError-CIeNzIqM.js";import"./Text-B5Nx5J8j.js";import"./Text-Bta2s8Xv.js";import"./RSPContexts-1zG-hXcj.js";import"./Collection-GsaDwpcK.js";import"./index-DnwTQJ2n.js";import"./DragAndDrop-CytVETaw.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmLr6iQk.js";import"./SelectionManager-JGNYvAX4.js";import"./useEvent-D46soD9Y.js";import"./useDescription-cKJ3yPgP.js";import"./inertValue-DhSXV2Ko.js";import"./useHighlightSelectionDescription-DYu376Xw.js";import"./useUpdateEffect-C_9dEYeo.js";import"./ListKeyboardDelegate-BuVhQcE2.js";import"./useHasTabbableChild-DEbqSrb8.js";import"./Checkbox-CXVg7ULs.js";import"./Form-wsN3MSKu.js";import"./check-B44ovf-V.js";import"./useToggleState-Cnyg2Tha.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
