import{r as m,f as l,j as t}from"./iframe-CTvpKBSK.js";import{S as d}from"./SearchField-lbxF5zk2.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BRZRs6LI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-66bebSHu.js";import"./utils-BiLGnBBz.js";import"./useLocalizedStringFormatter-g83VFJyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D2Jr83z3.js";import"./useFocusRing-DfvRkfqL.js";import"./index-g0pugt_v.js";import"./index-DVdtA1wK.js";import"./useFormValidation-Chpv9In5.js";import"./useField-BCLlGOHG.js";import"./Button-u0YKTc5k.js";import"./Hidden-DgXsqmZh.js";import"./useLabels-DvvCz1Di.js";import"./useButton-PqLQDpbO.js";import"./search-SCi00PnM.js";import"./createLucideIcon-BvYu-wbL.js";import"./ClearButton-CvbebUvY.js";import"./Button-BtfMoIh9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C25wyzL4.js";import"./VisuallyHidden-C1c0ClIs.js";import"./x-CfmXATlG.js";import"./FieldError-BquSn9wl.js";import"./Text-DjtetnZp.js";import"./Text-BI68LSzD.js";import"./RSPContexts-fL8CzLzf.js";import"./Collection-DJV5p488.js";import"./index-C-5LL5qr.js";import"./DragAndDrop-Dus2JLj_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8uATEmda.js";import"./SelectionManager-CPlVMwPw.js";import"./useEvent-6UK5uY3G.js";import"./useDescription-C76Kc7TT.js";import"./inertValue-Bz2tQ2hm.js";import"./useHighlightSelectionDescription-Bsm49Mv-.js";import"./useUpdateEffect-Dy4sE4Ea.js";import"./ListKeyboardDelegate-C-lNPHxi.js";import"./useHasTabbableChild-mSa-SvUa.js";import"./Checkbox-NVYJxCr8.js";import"./Form-mfwEhoNh.js";import"./check-ldM4tW1_.js";import"./useToggleState-D7YYJc2E.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
