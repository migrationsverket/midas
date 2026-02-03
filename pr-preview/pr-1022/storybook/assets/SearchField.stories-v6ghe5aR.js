import{r as m,f as l,j as t}from"./iframe-2JtjApPo.js";import{S as d}from"./SearchField-TL5qvVUh.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BcOJ3z2M.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bc67AkWO.js";import"./utils-CzNHZNuR.js";import"./useLocalizedStringFormatter-DLo_dynU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4e7wbku.js";import"./useFocusRing-C0YicbWo.js";import"./index-CSBRpQP6.js";import"./index-BGdLG16e.js";import"./useFormValidation-BCYtaxsj.js";import"./useField-DBBpCUIY.js";import"./Button-ByCdtsdN.js";import"./Hidden-C9R9ag8Z.js";import"./useLabels-L4n1lfmV.js";import"./useButton-DQi2T4lG.js";import"./search-BSbcvbz0.js";import"./createLucideIcon-DDjq8OkZ.js";import"./ClearButton-Du8kSZnN.js";import"./Button-Cqjrp1pe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dm9cUQa8.js";import"./VisuallyHidden-BPqsl5RX.js";import"./x-BP08_jMZ.js";import"./FieldError-Dln1Os_1.js";import"./Text-DuXa3TNC.js";import"./Text-BSc0SvwI.js";import"./RSPContexts-CHZ5pSVJ.js";import"./Collection-qvAla_kv.js";import"./index-Bb5gds0q.js";import"./DragAndDrop--0Kl9sQK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-gj1EUJNv.js";import"./SelectionManager-9xpIiF7K.js";import"./useEvent-X2YyRtFg.js";import"./useDescription-DTNf7b1X.js";import"./inertValue-DPFd6JxP.js";import"./useHighlightSelectionDescription-e1VUgym2.js";import"./useUpdateEffect-BCFuFidE.js";import"./ListKeyboardDelegate-CG7ZMDhP.js";import"./useHasTabbableChild-DZoxr5Oj.js";import"./Checkbox-D8Hc6Ejn.js";import"./Form-DKceiC0m.js";import"./check-BN4gFO1S.js";import"./useToggleState-MjVQcxmt.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
